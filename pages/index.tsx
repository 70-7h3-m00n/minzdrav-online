import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import styles from '@/styles/pages-styles/Home.module.scss'
import classNames from 'classnames'
import Button from '@/src/components/Button'
import Image from 'next/image'
import urlImage from '@/public/images/home.png'
import urlImageMedia from '@/public/images/homeMedia.png'
import FormApplication from '@/src/features/FormApplication/components/FormApplication'
import DataCardDirection from '@/src/data/dataCardDirection'
import { motion } from 'framer-motion'
import { animation } from '../styles/animation/Home'
import CardPartners from '@/src/components/CardPartners'
import fetchPartner from '@/src/api/fetchPartner'
import fetchResources from '@/src/api/fetchResources'
import { NextSeo } from 'next-seo'

const DynamicCardResources = dynamic(() => import('@/src/components/CardResources'))
const DynamicCardDirection = dynamic(() => import('@/src/features/ToggleDirection/components/CardDirection'))
const DynamicSlider = dynamic(() => import('@/src/components/Slider'))

interface PageHomeProps {
    resources: Awaited<ReturnType<typeof fetchResources>>
    partnerData: Awaited<ReturnType<typeof fetchPartner>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const resources = await fetchResources(locale!)
    const partnerData = await fetchPartner(locale!)

    return {
        props: {
            resources,
            partnerData,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 120,
    }
}

const PageHome: NextPage<PageHomeProps> = ({ resources, partnerData }) => {
    const { t } = useTranslation()

    return (
        <>
            <NextSeo title={'Главная'} />

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

                        <motion.div custom={3} layout variants={animation.leftContentAnimation}>
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
                        initial='hidden'
                        animate='visible'
                        custom={1}
                        layout
                        variants={animation.rightContentAnimation}
                        className={styles.info_containerRight}
                    >
                        <Image
                            className={styles.imgLong}
                            src={urlImage}
                            alt={'home'}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            sizes='33vw'
                        />
                        <Image
                            className={styles.imageShort}
                            src={urlImageMedia}
                            alt={'home'}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            sizes='33vw'
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
                        {DataCardDirection.map((card, index) => (
                            <DynamicCardDirection
                                key={index}
                                imageSrc={card.image}
                                textLink={t(card.text)}
                                colorBtn={card.styles}
                                contentTab={card.contentTab}
                            />
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    viewport={{ once: true }}
                    className={classNames(styles.partners, partnerData?.length === 0 && 'close')}
                    initial='hidden'
                    whileInView='visible'
                    layout
                    custom={2}
                    variants={animation.bottomContentAnimation}
                >
                    <h2 className={classNames(['container', 'header'])}>{t('homeHeaders:homePartners')}</h2>

                    <DynamicSlider>
                        <>
                            {partnerData?.map((item, index) => (
                                <CardPartners key={index} partner={item.partner} iconUrl={item.logo[0].url} />
                            ))}
                        </>
                    </DynamicSlider>
                </motion.section>

                <motion.section
                    viewport={{ once: true }}
                    className={classNames(['container', resources.length !== 0 ? styles.resources : 'close'])}
                    layout
                    initial='hidden'
                    whileInView='visible'
                    custom={2}
                    variants={animation.bottomContentAnimation}
                >
                    <h2 className={'header'}>{t('homeHeaders:homeResources')}</h2>
                    <div className={styles.cardWrapper}>
                        {resources?.map((item, index) => (
                            <DynamicCardResources
                                key={index}
                                text={item.description}
                                alt={item.description}
                                src={item.icon[0].url}
                            />
                        ))}
                    </div>
                </motion.section>
            </>
        </>
    )
}

export default PageHome
