import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { ToggleDirection } from '@/src/features/ToggleDirection'

interface PageDirectionsProps {}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 10000,
    }
}

const PageDirections: NextPage<PageDirectionsProps> = ({}) => {
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>

            <section className={'container'}>
                <ToggleDirection.ShowInfoCourses />

                <div>
                    <h2 className={'header'}>{t('courseDirections:header')}</h2>
                    <div>
                        <ToggleDirection.TabCourses />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageDirections
