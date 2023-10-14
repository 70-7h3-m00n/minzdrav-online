import React, { useState } from 'react'
import styles from '@/styles/pages-styles/Webinars.module.scss'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import FilterWebinars from '@/src/features/Webinars/components/FilterWebinar'
import fetchWebinars from '@/src/api/fetchWebinars'
import ShowWebinar from '@/src/features/Webinars/components/ShowWebinar'
import { useRouter } from 'next/router'

interface PageWebinarsProps {
    webinarsNotStarted: Awaited<ReturnType<typeof fetchWebinars>>
    webinarsIsOver: Awaited<ReturnType<typeof fetchWebinars>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const webinarsNotStarted = await fetchWebinars({ locale: locale! })
    const webinarsIsOver = await fetchWebinars({ locale: locale!, timeFilter: false })

    return {
        props: {
            webinarsNotStarted,
            webinarsIsOver,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 60,
    }
}

const Webinars: NextPage<PageWebinarsProps> = ({ webinarsNotStarted, webinarsIsOver }) => {
    const [dataWebinarsNotStarted, setDataWebinarsNotStarted] = useState(webinarsNotStarted)
    const [dataWebinarsIsOver, setDataWebinarsIsOver] = useState(webinarsIsOver)
    const locale = useRouter().locale!

    const onDataWebinar = async (filter: string) => {
        const newWebinarsNotStarted = await fetchWebinars({ locale, filter })
        const newWebinarsIsOver = await fetchWebinars({ locale: locale!, filter, timeFilter: false })

        setDataWebinarsNotStarted([...newWebinarsNotStarted])
        setDataWebinarsIsOver([...newWebinarsIsOver])
    }

    return (
        <div className={styles.page}>
            <section className={'container'}>
                <FilterWebinars data={[webinarsNotStarted, webinarsIsOver].flat(1)} onDataWebinar={onDataWebinar} />

                <ShowWebinar data={dataWebinarsNotStarted} header={'График вебинаров'} />

                <ShowWebinar data={dataWebinarsIsOver} header={'Прошедшие вебинары'} />
            </section>
        </div>
    )
}

export default Webinars
