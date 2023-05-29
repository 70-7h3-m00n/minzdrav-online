import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import FormSending from '@/src/features/FormApplication/components/FormSending'

const FormApplication = () => {
    const router = useRouter()
    const { t } = useTranslation('form')

    const toggleContent = router.asPath === '/'

    return (
        <div className={toggleContent ? styles.wrapper : styles.wrapperFlex}>
            {
                <div className={toggleContent ? '' : styles.wrapperContent}>
                    <h2 className={styles.header}>{t('header-one')}</h2>
                    {toggleContent ? <></> : <p className={styles.descriptionForm}>{t('description')}</p>}
                </div>
            }

            <FormSending />
        </div>
    )
}

export default FormApplication
