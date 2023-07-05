import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Modal } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { IOpenModalStore, openModalStore } from '@/src/features/FormApplication/store/OpenModal'

import styles from './styles.module.scss'

const ModalAlert = (): JSX.Element => {
    const { t } = useTranslation('common')
    const { isOpen, status, toggleModal }: IOpenModalStore = openModalStore

    useEffect(() => {
        if (isOpen && status) {
            const onClose = setTimeout(() => {
                toggleModal(false)
            }, 3000)

            return () => {
                clearTimeout(onClose)
            }
        }
    }, [isOpen, status, toggleModal])

    return (
        <Modal
            open={isOpen}
            className={styles.modal}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            aria-labelledby='modal-title'
            aria-describedby='modal-description'
        >
            <div className={styles.modalWrapper}>
                <h3 className={status ? styles.statusOk : styles.statusError}>
                    {status ? t('statusOk') : t('statusError')}
                </h3>

                <p className={styles.text}>{status ? t('statusOkText') : t('statusErrorText')}</p>
            </div>
        </Modal>
    )
}

export default observer(ModalAlert)
