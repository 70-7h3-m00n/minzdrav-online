import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 10000,
    }
}

const NotFound: NextPage = () => {
    return (
        <div>
            <h1>404 - Страница не найдена</h1>;
        </div>
    )
}

export default NotFound
