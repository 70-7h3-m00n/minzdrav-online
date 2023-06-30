import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import Discount from '@/src/components-svg/Discount'
import classNames from 'classnames'

interface CardPriceProps {
    color: string
    category: string
    discount: number
    price: number
    toggleContent?: boolean
}

const CardPrice = ({ color, price, discount, category, toggleContent = false }: CardPriceProps): JSX.Element => {
    const { t } = useTranslation()

    const installmentPlan = Math.round((price + (price / 100) * discount) / 12)
    const retraining = Math.round((price / 100) * discount + price)

    return (
        <div
            className={!toggleContent ? styles.cardPrice : styles.cardPriceBorder}
            style={{ background: toggleContent ? 'white' : `linear-gradient(134deg, ${color} 0%, #ffff 135%)` }}
        >
            <div className={styles.category}>
                <div className={toggleContent ? styles.categoryItemToggle : styles.categoryItem}>
                    {t(`common:${category}`)}
                </div>
            </div>

            <div className={styles.discountBlock}>
                <div className={styles.wrapperImageDiscount}>
                    <Discount />

                    <div className={styles.textImage}>-{discount}%</div>
                </div>

                <p className={styles.textDiscount}>{t('common:discount')} 30.06.2023</p>
            </div>

            <div className={styles.priceBlock}>
                <div className={styles.wrapperPriceBlock} style={{ color: toggleContent ? 'black' : 'white' }}>
                    <div>{t('common:price')}</div>

                    <h3 className={styles.textPrice}>{price.toLocaleString('ru-RU')}
                        <span className={styles.text}> ₽</span>
                    </h3>
                </div>

                <div className={toggleContent ? 'close' : styles.wrapperPriceBlock} style={{ color: 'white' }}>
                    <div className={classNames(styles.textInstallment, styles.textThrough)}>
                        {installmentPlan.toLocaleString('ru-RU')}
                        <span className={styles.smallText}>&nbsp; ₽/месяц</span>
                    </div>

                    <div>
                        <h3 className={styles.textDisc}>
                            {Math.round(price / 12).toLocaleString('ru-RU')}
                            <span className={styles.smallText}>&nbsp; ₽/месяц</span>
                        </h3>
                    </div>

                    <div className={styles.smallText}>{t(`common:installmentPlan`)}</div>
                </div>

                <div className={!toggleContent ? 'close' : styles.wrapperPriceBlock}>
                    <br/>
                    <h3 className={classNames(styles.textPrice, styles.textThrough)}>
                        {retraining.toLocaleString('ru-RU')}
                        <span className={styles.text}> ₽</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CardPrice
