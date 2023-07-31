import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import styles from '@/styles/pages-styles/Course.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import CheckMark from '@/src/components-svg/CheckMark'
import { useTranslation } from 'next-i18next'
import FormSending from '@/src/features/FormApplication/components/FormSending/formSending'
import TabCourseInfo from '@/src/features/TabCourseInfo/components/TabCourseInfo'
import Icon1 from '@/src/components-svg/Icons/Icon1'
import Icon2 from '@/src/components-svg/Icons/Icon2'
import Icon3 from '@/src/components-svg/Icons/Icon3'
import Icon4 from '@/src/components-svg/Icons/Icon4'
import AccordionSkills from '@/src/components/AccordionSkills'
import CardPrice from '@/src/components/CardPrice'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { animation } from '../../styles/animation/Home'
import Slider from '@/src/components/Slider'
import CardPartners from '@/src/components/CardPartners'
import CardSpeaker from '@/src/components/CardSpeaker'
import fetchCourse from '@/src/api/fetchCourse'
import fetchPartner from '@/src/api/fetchPartner'
import fetchPathsCourses from '@/src/api/fetchPathsCourses'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Link from 'next/link'
import Spiner from '@/src/components/Spiner'
import Answer from '@/src/features/FormApplication/components/Answer/Answer'
import { routeDomainFront } from '@/src/config/routerApi'
import { fetchLicenses } from '@/src/api/fetchLicenses'

interface PageCourseProps {
    course: Awaited<ReturnType<typeof fetchCourse>>
    partnerData: Awaited<ReturnType<typeof fetchPartner>>
    licenses: Awaited<ReturnType<typeof fetchLicenses>>
}

interface ItemData {
    style: string
    text: string
    icon: JSX.Element
    header: string
}

interface ArrayListSkills {
    header: string
    list: Array<{ item: string }>
    view: boolean
}

interface DataPrice {
    category: string
    price: number
}

function PageCourse({ course, partnerData, licenses }: PageCourseProps): JSX.Element {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    if (course === undefined) return <></>

    const seoTitle = Boolean(course.courseSeo?.title) ? course.courseSeo.title : 'Курс'
    const seoDescription = Boolean(course.courseSeo?.description) ? course.courseSeo.description : 'Курс медецины'

    const arrayItemsData: Array<ItemData> = [
        {
            style: styles.one,
            text: course.studyingTime,
            icon: <Icon1 width={50} height={38} fill={course.color} />,
            header: t('CoursesPage:studyingTime'),
        },
        {
            style: styles.two,
            text: course.receivedDocuments,
            icon: <Icon2 width={60} height={53} fill={course.color} />,
            header: t('CoursesPage:receivedDocuments'),
        },
        {
            style: styles.three,
            text: course.startDateTraining,
            icon: <Icon3 width={55} height={50} fill={course.color} />,
            header: t('CoursesPage:dateOfTraining'),
        },
        {
            style: styles.four,
            text: course.typeTrainingHeader,
            icon: <Icon4 width={76} height={56} fill={course.color} />,
            header: t('CoursesPage:typeTraining'),
        },
    ]

    const arrayListSkills: Array<ArrayListSkills> = [
        {
            header: t('CoursesPage:knowledge'),
            list: course.knowledgeList,
            view: course.knowledgeList.length !== 0,
        },
        {
            header: t('CoursesPage:skills'),
            list: course.skillList,
            view: course.skillList.length !== 0,
        },
        {
            header: t('CoursesPage:navyki'),
            list: course.listOfSkills,
            view: course.listOfSkills.length !== 0,
        },
    ]

    const dataPrice = [
        ...new Set(
            course.typeTraining.reduce((accum: Array<DataPrice>, currentValue) => {
                if (currentValue.item === 'training') {
                    return accum.concat({
                        category: currentValue.item,
                        price: course.priceCourse.priceRetraining,
                    })
                } else if (currentValue.item === 'professionalRetraining') {
                    return accum.concat({
                        category: currentValue.item,
                        price: course.priceCourse.priceQualifications,
                    })
                }
                return accum
            }, []),
        ),
    ]

    const viewSkillsBlock = arrayListSkills.filter(item => !item.view).length === arrayListSkills.length

    return (
        <>
            <NextSeo title={seoTitle} description={truncate(seoDescription, 120)} />

            <section style={{ backgroundColor: course.color }}>
                <div className={'container'}>
                    <div className={styles.blockInfo}>
                        <div className={styles.cardInfoWrapper}>
                            <h1 className={styles.header}>{course.name}</h1>
                            <p className={styles.descrText}>{course.header}</p>

                            <div className={styles.itemsBlockWrapper}>
                                {arrayItemsData.map((item, index) => (
                                    <div key={item.header + index} className={item.style}>
                                        {item.icon}
                                        <div className={styles.wrapperText}>
                                            <h3 className={styles.headerItem}>{item.header}</h3>
                                            <div
                                                className={styles.descr}
                                                dangerouslySetInnerHTML={{
                                                    __html: item.text,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.wrapperImage}>
                            <Image
                                className={styles.imageHeader}
                                src={course.imageCourse[0].url}
                                alt={'imageCourse'}
                                priority
                                width={100}
                                height={100}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={classNames(['container', styles.descriptionCourse])}
                dangerouslySetInnerHTML={{
                    __html: course.description === null ? '' : course.description,
                }}
            />

            <section className={'container'}>
                <div className={classNames(styles.thisCourseFor, course.thisCourseFor.length === 0 && 'close')}>
                    <div className={styles.headerBlock}>
                        <h2 className={'header'}>{t('CoursesPage:headerCourseFor')}</h2>
                    </div>

                    <div className={styles.listItem}>
                        <ul>
                            {course.thisCourseFor.map((list, index) => (
                                <li key={list.item + index} className={styles.item}>
                                    <CheckMark className={styles.check} />

                                    <p className={styles.text}>{list.item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={viewSkillsBlock ? 'close' : styles.learnInfo} style={{ backgroundColor: course.color }}>
                <div className={classNames('container', styles.blockInfoWrapper)}>
                    <h2 ref={ref} className={'header'}>
                        {t('CoursesPage:headerBlockSkills')}
                    </h2>

                    {arrayListSkills.map((item, index) => (
                        <div
                            key={item.header + index}
                            style={{
                                transform: isInView ? 'none' : 'translateX(1000px)',
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                            }}
                        >
                            <AccordionSkills category={course.categories} color={course.color} data={item} />
                        </div>
                    ))}
                </div>
            </section>

            <section className={'container'}>
                <TabCourseInfo course={course} />
            </section>

            <motion.section
                viewport={{ once: true }}
                className={classNames('container ', styles.speaker, course.speakers?.length === 0 && 'close')}
                initial='hidden'
                whileInView='visible'
                layout
                custom={2}
                variants={animation.bottomContentAnimation}
            >
                <h2 className={'header'}>{t('CoursesPage:speakers')}</h2>

                <Slider>
                    <>
                        {course.speakers?.map((speaker, index) => (
                            <CardSpeaker
                                key={speaker.name + index}
                                name={speaker.name}
                                description={speaker.description}
                                image={speaker.image[0].url}
                            />
                        ))}
                    </>
                </Slider>
            </motion.section>

            <section className={'container'}>
                <h2 className={'header'}>{t('CoursesPage:headerProgram')}</h2>

                <div className={styles.wrapperPrice}>
                    <div className={styles.priceBlock}>
                        <h3 className={styles.headerPrice}>{course.name}</h3>

                        {dataPrice.reverse().map((item, index) => (
                            <CardPrice
                                category={item.category}
                                color={course.color}
                                price={item.price}
                                discount={course.priceCourse.discount}
                                toggleContent={item.category === 'training'}
                                key={item.category + index}
                            />
                        ))}
                    </div>

                    <div className={styles.formBlock}>
                        <h3 className={styles.headerPrice}>{t('CoursesPage:headerForm')}</h3>

                        <div className={styles.formContainer}>
                            <Spiner />

                            <FormSending />

                            <Answer />
                        </div>
                    </div>
                </div>
            </section>

            <motion.section
                viewport={{ once: true }}
                className={classNames(styles.partners, partnerData?.length === 0 && 'close')}
                initial='hidden'
                whileInView='visible'
                layout
                custom={2}
                variants={animation.bottomContentAnimation}
            >
                <h2 className={'container header'}>{t('CoursesPage:studying')}</h2>

                <Slider>
                    <>
                        {partnerData?.map((item, index) => (
                            <CardPartners key={index} partner={item.partner} iconUrl={item.logo[0].url} />
                        ))}
                    </>
                </Slider>
            </motion.section>

            <section className={'container'}>
                <h2 className={'header'}>{t('CoursesPage:headerLicenses')}</h2>

                <ul className={styles.licensesList}>
                    {licenses.map((licenses, index) => (
                        <li key={licenses.description + index}>
                            <Image src={licenses.image[0].url} alt={licenses.description} width={244} height={332} />

                            <p>{licenses.description}</p>
                        </li>
                    ))}
                </ul>

                <div className={styles.rosreestrBlock}>
                    <p className={styles.registryDescr}>{t('CoursesPage:registryText')}</p>

                    <Link
                        className={styles.registryLink}
                        target={'_blank'}
                        href={
                            'https://islod.obrnadzor.gov.ru/rlic/details/163962cf-2a44-4fbd-b607-ea0b74071334/?roistat_visit=485253'
                        }
                    >
                        {t('CoursesPage:registryLink')}
                    </Link>
                </div>
            </section>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths = (
        await Promise.all(
            locales!.map(async local => {
                const data = await fetchPathsCourses(local)
                return data.map(course => ({
                    params: { slug: course.pathCourse },
                    locale: local,
                }))
            }),
        )
    ).flat(2)

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const course = await fetchCourse(locale!, String(params!.slug))
    const partnerData = await fetchPartner(locale!)
    const licenses = await fetchLicenses(locale!)

    return {
        props: {
            course,
            partnerData,
            licenses,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
    }
}

export default PageCourse
