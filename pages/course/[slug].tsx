import getPartnersData from '@/src/api/getProgramData'
import { GetStaticPathsContext, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'
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
import Head from 'next/head'
import CardPrice from '@/src/components/CardPrice'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import getPathsCoursesData from '@/src/api/getPathsCourses'

export const getStaticPaths: ({ locales }: GetStaticPathsContext) => Promise<{
    paths: undefined | FlatArray<Awaited<{ params: { slug: string }; locale: string }[]>[], 2>[]
    fallback: boolean
}> = async ({ locales }) => {
    const paths =
        locales &&
        (
            await Promise.all(
                locales.map(async local => {
                    const data = await getPathsCoursesData(local)
                    return data.map(course => ({
                        params: { slug: course.pathCourse },
                        locale: local,
                    }))
                }),
            )
        ).flat(2)

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const data = await getPartnersData(locale!)
    const course = data.filter(course => course.pathCourse === params!.slug)[0]

    return {
        props: {
            course,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 120,
    }
}

interface PageCourseProps {
    course: NormalizeProgramData
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

export default function PageCourse({ course }: PageCourseProps): JSX.Element {
    const { t } = useTranslation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    if (course === undefined) return <></>

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
            <Head>
                <title>Курс</title>
            </Head>
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
                                src={course.imageCourse!}
                                alt={'imageCourse'}
                                fill
                                priority
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
                <div className={styles.thisCourseFor}>
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

                        <div>
                            <FormSending />
                        </div>
                    </div>
                </div>
            </section>

            <section className={'container'}>
                <h2 className={'header'}>{t('CoursesPage:headerLicenses')}</h2>

                <ul className={styles.licensesList}>
                    {course.ourLicenses.map((licenses, index) => (
                        <li key={licenses.description + index}>
                            <Image src={licenses.image} alt={licenses.description} width={244} height={332} priority />

                            <p>{licenses.description}</p>
                        </li>
                    ))}
                </ul>

                <div className={styles.rosreestrBlock}>
                    <p className={styles.registryDescr}>{t('CoursesPage:registryText')}</p>

                    <button className={styles.registryLink}>{t('CoursesPage:registryLink')}</button>
                </div>
            </section>
        </>
    )
}
