import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Books from '@/public/images/книжка.png'
import Modal from '@/src/components/Modal'
import FormSending from '@/src/features/FormApplication/components/FormSending'
import { useTranslation } from 'next-i18next'

interface PopUpFormProps {
    background: string
}

const PopUpForm = ({ background }: PopUpFormProps) => {
    const { t } = useTranslation('form')
    const [isModal, setModal] = useState(false)

    return (
        <>
            <div className={styles.popUpFormContainer} style={{ backgroundColor: background }}>
                <div className={styles.content}>
                    <p>Если у Вас другое образование, то свяжитесьвывф с нами оставив заяву и мы свяжемся с Вами</p>

                    <button onClick={() => setModal(true)}>Отправить</button>
                </div>

                <div className={styles.containImage}>
                    <Image
                        src={Books}
                        alt={'books'}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            position: 'absolute',
                            bottom: 0,
                        }}
                        sizes='33vw'
                    />
                </div>
            </div>

            <Modal open={isModal} setHidden={setModal}>
                <div className={styles.popUp}>
                    <h3 className={styles.popUpHeader}>{t('header-one')}</h3>

                    <FormSending />
                </div>
            </Modal>
        </>
    )
}

export default PopUpForm
