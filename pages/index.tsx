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
import { motion } from 'framer-motion'
import { animation } from '@/animationPages/Home'

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

    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <>
                <section className={classNames(['container', styles.info])}>
                    <motion.div initial='hidden' animate='visible' className={styles.info_ContainerLeft}>
                        <motion.h1
                            custom={1}
                            variants={animation.leftContentAnimation}
                            className={styles.info_ContainerLeft__Header}
                        >
                            {t('home-headers:homeGeneral')}
                        </motion.h1>

                        <motion.h2
                            custom={2}
                            variants={animation.leftContentAnimation}
                            className={styles.info_ContainerLeft__SubHeader}
                        >
                            {t('home-headers:homeSub')}
                        </motion.h2>

                        <motion.div viewport={{ once: true }} custom={3} layout variants={animation.leftContentAnimation}>
                            <Button
                                style={styles.info_ContainerLeft__Btn}
                                link={'/'}
                                text={t('common:homeBtnDiscover')}
                            />
                        </motion.div>

                        <motion.div
                            custom={4}
                            layout
                            variants={animation.leftContentAnimation}
                            className={styles.info_ContainerLeft__form}
                        >
                            <FormApplication />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        viewport={{ once: true }}
                        initial='hidden'
                        animate='visible'
                        custom={1}
                        layout
                        variants={animation.rightContentAnimation}
                        className={styles.info_containerRight}
                    >
                        <Image
                            src={urlImage}
                            alt={''}
                            fill
                            priority
                            sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                        />
                    </motion.div>
                </section>

                <motion.section
                    viewport={{ once: true }}
                    className={classNames(['container', styles.directions])}
                    initial='hidden'
                    whileInView='visible'
                    layout
                    custom={1}
                    variants={animation.bottomContentAnimation}
                >
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
                </motion.section>

                {/*<section className={classNames(['container', styles.profession])}>*/}
                {/*    <h2 className={'header'}>{t('homeHeaders:homeGetProfession')}</h2>*/}
                {/*</section>*/}

                <motion.section
                    viewport={{ once: true }}
                    className={styles.Partners}
                    initial='hidden'
                    whileInView='visible'
                    layout
                    custom={2}
                    variants={animation.bottomContentAnimation}
                >
                    <h2 className={classNames(['header', 'container'])}>{t('homeHeaders:homePartners')}</h2>

                    <Slider
                        dataArray={partnerData}
                        render={(props, ref) => (
                            <CardPartners partner={props.partner} iconUrl={props.iconUrl} ref={ref} />
                        )}
                    />
                </motion.section>

                <motion.section
                    viewport={{ once: true }}
                    className={classNames(['container', styles.resources])}
                    layout
                    initial='hidden'
                    whileInView='visible'
                    custom={2}
                    variants={animation.bottomContentAnimation}
                >
                    <h2 className={'header'}>{t('homeHeaders:homeResources')}</h2>
                    <div className={styles.cardWrapper}>
                        {resources?.map(item => (
                            <CardResources key={uuid()} text={item.text} alt={item.text} src={item.iconUrl} />
                        ))}
                    </div>
                </motion.section>
            </>
        </>
    )
}

export default PageHome
