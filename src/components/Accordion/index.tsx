import styles from './styles.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import ArrowUp from '@/src/components-svg/arrowUp'
import ArrowDown from '@/src/components-svg/arrowDown'
import Button from '@/src/components/Button'
import ItemLi from '@/src/components-svg/ItemLi'
import Image from 'next/image'
import imageDiet from '@/public/images/fruit.png'
import imagePsych from '@/public/images/brains.png'

interface AccordionProps {
    category?: string
    header?: string
    data?: string
    icon: 'dietetics' | 'psychology'
}

const Accordion = ({ icon, data, header, category }: AccordionProps): JSX.Element => {
    const [toggleContent, setToggleContent] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)
    const { t } = useTranslation()

    const toggleContentStyle = toggleContent ? styles.open : styles.close
    const openDescrStyle = openDescription ? styles.close : styles.description
    const toggleImageStyles = openDescription ? styles.contentEnd : styles.contentStart
    const toggleBtn = !openDescription ? styles.wrapperBtn : styles.close

    return (
        <>
            <div className={styles.wrapperAccordion}>
                <div className={styles.wrapperContent}>
                    <div className={styles.category}>Профессия</div>
                    <h3 className={styles.header}>Детский психолог</h3>
                    <data className={styles.data}>9 месяцев</data>
                </div>
                <div className={styles.wrapperIcon}>
                    <div className={styles.wrapperArrow}>
                        <div className={styles.image}>
                            <Image
                                src={icon === 'dietetics' ? imageDiet : imagePsych}
                                alt={''}
                                priority
                                fill
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>

                        <div className={styles.arrow} onClick={() => setToggleContent(!toggleContent)}>
                            {toggleContent ? <ArrowUp /> : <ArrowDown />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames([styles.contentBlock, toggleContentStyle])}>
                <h3 className={styles.header}>{t('Accordion:header')}</h3>

                <div className={toggleImageStyles}>
                    <div className={styles.one}>
                        <div className={classNames([styles.wrapperImage, openDescription && styles.bigWrapper])}>1</div>
                        <p className={openDescrStyle}>Проводить психологическую диагностику ребенка</p>
                    </div>

                    <div className={styles.two}>
                        <div className={styles.wrapperImage}>2</div>
                        <p className={openDescrStyle}>Выстраивать правильный процесс общения ребенка с родителями</p>
                    </div>

                    <div className={styles.three}>
                        <div className={styles.wrapperImage}>3</div>
                        <p className={openDescrStyle}>Самостоятельно составлять коррекционно-развивающие программы</p>
                    </div>

                    <div className={classNames([styles.four, !openDescription && styles.close])}>
                        <h3 className={styles.header}>
                            Начинающим психологам, педагогам, дефектологам, логопедам и воспитателям, чтобы
                        </h3>

                        <ul className={styles.listItems}>
                            <li>
                                <ItemLi />

                                <p>Проводить психологическую диагностику ребенка</p>
                            </li>
                        </ul>
                        <Button style={styles.link} text={'Узнать подробнее'} link={'/'} />
                    </div>
                </div>

                <div className={toggleBtn}>
                    <button className={styles.btn} onClick={() => setOpenDescription(true)}>
                        Узнать подробнее
                    </button>
                </div>
            </div>
        </>
    )
}

export default Accordion
