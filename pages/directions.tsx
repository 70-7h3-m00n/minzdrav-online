import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { ToggleDirection } from '@/src/features/ToggleDirection'
import getPartnersData from '@/src/api/getProgramData'

interface PageDirectionsProps {
    data: Awaited<ReturnType<typeof getPartnersData>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const data = await getPartnersData(locale!)

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 10000,
    }
}

const PageDirections: NextPage<PageDirectionsProps> = ({ data }) => {
    const { t } = useTranslation()
    return (
        <>
            <Head>
                <title>Направление</title>
            </Head>

            <section className={'container'}>
                <ToggleDirection.ShowInfoCourses data={data} />

                <div>
                    <h2 className={'header'}>{t('courseDirections:header')}</h2>

                    <ToggleDirection.TabCourses />
                </div>
            </section>
        </>
    )
}

export default PageDirections
