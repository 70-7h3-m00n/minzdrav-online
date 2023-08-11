import dynamic from 'next/dynamic'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const FormSendingDynamic = dynamic(() => import('@/src/features/FormApplication/components/FormSending'))

const FormApplication = () => {
    const { t } = useTranslation('form')
    const router = useRouter()

    const toggleContent = router.pathname === '/'

    return (
        <div className={toggleContent ? styles.wrapper : styles.wrapperFlex}>
            <div className={toggleContent ? '' : styles.wrapperContent}>
                <h2 className={styles.header}>{t('header-one')}</h2>
                {toggleContent ? <></> : <p className={styles.descriptionForm}>{t('description')}</p>}
            </div>

            <FormSendingDynamic />
        </div>
    )
}

export default FormApplication
