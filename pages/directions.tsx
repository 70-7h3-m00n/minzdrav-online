import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { ToggleDirection } from '@/src/features/ToggleDirection'
import { createContext } from 'react'
import getCoursesData from '@/src/api/getCoursesData'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'

interface PageDirectionsProps {
    data: Awaited<ReturnType<typeof getCoursesData>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const data = await getCoursesData(locale!)

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 120,
    }
}

export const DataContext = createContext<Array<NormalizeCoursesData> | null>(null)

const PageDirections: NextPage<PageDirectionsProps> = ({ data }) => {
    const { t } = useTranslation()

    return (
        <DataContext.Provider value={data}>
            <Head>
                <title>Направление</title>
            </Head>

            <section className={'container'}>
                <ToggleDirection.ShowInfoCourses />

                <div>
                    <h2 className={'header'}>{t('courseDirections:header')}</h2>

                    <ToggleDirection.TabCourses />
                </div>
            </section>
        </DataContext.Provider>
    )
}

export default PageDirections
