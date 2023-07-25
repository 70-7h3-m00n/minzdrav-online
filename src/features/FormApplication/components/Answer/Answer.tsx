import { observer } from 'mobx-react-lite'
import { IOpenModalStore, openModalStore } from '@/src/features/FormApplication/store/OpenModal'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'

const Answer = () => {
    const { t } = useTranslation('common')
    const { isOpen, status }: IOpenModalStore = openModalStore

    return (
        <div className={isOpen ? styles.answerContainer : 'close'}>
            <div className={status ? styles.container : 'close'}>
                <h3 className={styles.statusOk}>{t('statusOk')}</h3>

                <p className={styles.text}>{t('statusOkText')}</p>
            </div>

            <div className={!status ? styles.container : 'close'}>
                <h3 className={styles.statusError}>{t('statusError')}</h3>

                <p className={styles.text}>{t('statusErrorText')}</p>
            </div>
        </div>
    )
}

export default observer(Answer)
