import React from 'react'
import styles from '@/styles/pages-styles/Webinars.module.scss'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import FilterWebinars from '@/src/features/Webinars/components/FilterWebinar'
import fetchWebinars from '@/src/api/fetchWebinars'
import WebinarSchedule from '@/src/features/Webinars/components/WebinarSchedule'

interface PageWebinarsProps {
    webinars: Awaited<ReturnType<typeof fetchWebinars>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const webinars = await fetchWebinars(locale!)

    return {
        props: {
            webinars,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
    }
}

const Webinars: NextPage<PageWebinarsProps> = ({ webinars }) => {
    return (
        <div className={styles.page}>
            <section className={'container'}>
                <FilterWebinars data={webinars} />

                <WebinarSchedule data={webinars} />
            </section>
        </div>
    )
}

export default Webinars
