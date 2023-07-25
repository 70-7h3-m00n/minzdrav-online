import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import { useTranslation } from 'next-i18next'
import { ToggleDirection } from '@/src/features/ToggleDirection'
import React, { createContext } from 'react'
import fetchCoursesName from '@/src/api/fetchCoursesName'
import { CourseName } from '@/src/api/fetchCoursesName/types'
import { NextSeo } from 'next-seo'

interface PageDirectionsProps {
    data: Awaited<ReturnType<typeof fetchCoursesName>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const data = await fetchCoursesName(locale!)

    return {
        props: {
            data,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 120,
    }
}

export const DataContext = createContext<Array<CourseName> | null>(null)

const PageDirections: NextPage<PageDirectionsProps> = ({ data }) => {
    const { t } = useTranslation()

    return (
        <DataContext.Provider value={data}>
            <NextSeo title={'Направление'} />

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
