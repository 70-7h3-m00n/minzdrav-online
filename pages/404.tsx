import styles from '@/styles/pages-styles/NotFaund.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Url404 from '@/public/images/404.png'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
    }
}

export default function Custom404() {
    const { t } = useTranslation()

    return (
        <div className={styles.wrapperHome}>
            <div className={styles.wrapperImage}>
                <Image
                    src={Url404}
                    alt={'404'}
                    priority
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <div className={styles.wrapperContent}>
                <h1 className={styles.header}>404</h1>
                <h2 className={styles.subHeader}>{t('error404:none')}</h2>
                <p className={styles.description}>{t('error404:linkHome')}</p>
                <Link className={styles.linkHome} href={'/'}>
                    {t('error404:btnError')}
                </Link>
            </div>
        </div>
    )
}
