'use client'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import styles from '@/styles/pages-styles/Home.module.scss'
import classNames from 'classnames'
import Button from '@/src/components/Button'
import Image from 'next/image'
import urlImage from '@/public/images/home.png'
import FormApplication from '@/src/features/FormApplication/components/FormApplication'
import CardResources from '@/src/components/CardResources'
import CardDirection from '../src/features/ToggleDirection/components/CardDirection'
import Slider from '@/src/components/Slider'
import DataCardDirection from '@/src/config/dataCardDirection'
import uuid from 'react-uuid'
import getResourcesData from '@/src/api/getArticlesData'
import CardPartners from '@/src/components/CardPartners'
import getPartnersData from '@/src/api/getPartnerData'
import { AnimatePresence, motion } from 'framer-motion'
import { animation } from '@/animationPages/Home'
import { usePathname } from 'next/navigation'

interface PageHomeProps {
    resources: Awaited<ReturnType<typeof getResourcesData>>
    partnerData: Awaited<ReturnType<typeof getPartnersData>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const resources = await getResourcesData(locale!)
    const partnerData = await getPartnersData(locale!)

    return {
        props: {
            resources,
            partnerData,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 10000,
    }
}

const PageHome: NextPage<PageHomeProps> = ({ resources, partnerData }) => {
    const { t } = useTranslation()
    const pas = usePathname()

    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <>
                <section className={classNames(['container', styles.info])}>
                    <AnimatePresence>
                        <motion.div
                            initial='initial'
                            animate='enter'
                            exit='exit'
                            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                            viewport={{ once: true }}
                            className={styles.info_ContainerLeft}
                            key={pas}
                        >
                            <h1 className={styles.info_ContainerLeft__Header}>{t('home-headers:homeGeneral')}</h1>

                            <h2 className={styles.info_ContainerLeft__SubHeader}>{t('home-headers:homeSub')}</h2>

                            <div>
                                <Button
                                    style={styles.info_ContainerLeft__Btn}
                                    link={'/'}
                                    text={t('common:homeBtnDiscover')}
                                />
                            </div>

                            <div className={styles.info_ContainerLeft__form}>
                                <FormApplication />
                            </div>
                        </motion.div>

                        <div className={styles.info_containerRight}>
                            <Image
                                src={urlImage}
                                alt={''}
                                fill
                                priority
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>
                    </AnimatePresence>
                </section>

                <section className={classNames(['container', styles.directions])}>
                    <h2 className={'header'}>{t('homeHeaders:homeDirections')}</h2>
                    <div className={styles.wrapperCardDirection}>
                        {DataCardDirection.map(card => (
                            <CardDirection
                                key={uuid()}
                                imageSrc={card.image}
                                textLink={t(card.text)}
                                colorBtn={card.styles}
                                contentTab={card.contentTab}
                            />
                        ))}
                    </div>
                </section>

                {/*<section className={classNames(['container', styles.profession])}>*/}
                {/*    <h2 className={'header'}>{t('homeHeaders:homeGetProfession')}</h2>*/}
                {/*</section>*/}

                <section className={styles.Partners}>
                    <h2 className={classNames(['header', 'container'])}>{t('homeHeaders:homePartners')}</h2>

                    <Slider
                        dataArray={partnerData}
                        render={(props, ref) => (
                            <CardPartners partner={props.partner} iconUrl={props.iconUrl} ref={ref} />
                        )}
                    />
                </section>

                <section className={classNames(['container', styles.resources])}>
                    <h2 className={'header'}>{t('homeHeaders:homeResources')}</h2>
                    <div className={styles.cardWrapper}>
                        {resources?.map(item => (
                            <CardResources key={uuid()} text={item.text} alt={item.text} src={item.iconUrl} />
                        ))}
                    </div>
                </section>
            </>
        </>
    )
}

export default PageHome
