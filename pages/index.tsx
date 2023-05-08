import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getFilesName from '@/src/helper/getFilesName';
import styles from '@/styles/pages-styles/Home.module.scss';
import classNames from 'classnames';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 10000,
    };
};

const PageHome: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <>
                <section className={classNames(['container', styles.contentPage])}>
                    <h1 className={styles.header}>Home</h1>
                </section>
            </>
        </>
    );
};

export default PageHome;
