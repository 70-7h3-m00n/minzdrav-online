import dynamic from 'next/dynamic'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Answer from '@/src/features/FormApplication/components/Answer/Answer'
import { IOpenModalStore, openModalStore } from '@/src/features/FormApplication/store/OpenModal'
import { observer } from 'mobx-react-lite'
import Spiner from '@/src/components/Spiner'

const FormSendingDynamic = dynamic(() => import('@/src/features/FormApplication/components/FormSending/formSending'))

const FormApplication = () => {
    const { isForm, isRoutForm, resetForm }: IOpenModalStore = openModalStore
    const { t } = useTranslation('form')
    const router = useRouter()

    useEffect(() => {
        if (router.pathname !== isRoutForm) {
            resetForm()
        }
    }, [router])

    const toggleContent = router.pathname === '/'

    return (
        <div className={toggleContent ? styles.wrapper : styles.wrapperFlex}>
            <Spiner />

            <div className={isForm ? '' : 'close'}>
                <div className={toggleContent ? '' : styles.wrapperContent}>
                    <h2 className={styles.header}>{t('header-one')}</h2>
                    {toggleContent ? <></> : <p className={styles.descriptionForm}>{t('description')}</p>}
                </div>

                <FormSendingDynamic />
            </div>

            <Answer />
        </div>
    )
}

export default observer(FormApplication)
