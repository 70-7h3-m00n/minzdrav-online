import getPartnersData from '@/src/api/getProgramData'
import { GetStaticPathsContext, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'
import styles from '@/styles/pages-styles/Course.module.scss'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import item1 from '@/public/images/item1.png'
import item2 from '@/public/images/item2.png'
import item3 from '@/public/images/item3.png'
import item4 from '@/public/images/item4.png'
import CheckMark from '@/src/components-svg/CheckMark'
import { useTranslation } from 'next-i18next'
import FormSending from '@/src/features/FormApplication/components/FormSending/formSending'
import TabCourseInfo from '@/src/features/TabCourseInfo/components/TabCourseInfo'

export const getStaticPaths: ({ locales }: GetStaticPathsContext) => Promise<{
    paths: undefined | FlatArray<Awaited<{ params: { slug: string }; locale: string }[]>[], 2>[]
    fallback: boolean
}> = async ({ locales }) => {
    const paths =
        locales &&
        (
            await Promise.all(
                locales.map(async local => {
                    const data = await getPartnersData(local)
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
        revalidate: 10000,
    }
}

interface PageCourseProps {
    course: NormalizeProgramData
}

interface ItemData {
    style: string
    text: string
    icon: StaticImageData
    header: string
    width: number
    height: number
}

interface ArrayListSkills {
    header: string
    list: Array<{ item: string }>
    view: boolean
}

export default function PageCourse({ course }: PageCourseProps): JSX.Element {
    const { t } = useTranslation()
    if (course === undefined) return <></>

    const arrayItemsData: Array<ItemData> = [
        {
            style: styles.one,
            text: course.studyingTime,
            icon: item1,
            header: t('CoursesPage:studyingTime'),
            width: 38,
            height: 38,
        },
        {
            style: styles.two,
            text: course.receivedDocuments,
            icon: item2,
            header: t('CoursesPage:receivedDocuments'),
            width: 49,
            height: 53,
        },
        {
            style: styles.three,
            text: course.startDateTraining,
            icon: item3,
            header: t('CoursesPage:dateOfTraining'),
            width: 50,
            height: 50,
        },
        {
            style: styles.four,
            text: course.typeTrainingHeader,
            icon: item4,
            header: t('CoursesPage:typeTraining'),
            width: 56,
            height: 56,
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

    return (
        <>
            <section style={{ backgroundColor: course.color }}>
                <div className={'container'}>
                    <div className={styles.blockInfo}>
                        <div className={styles.cardInfoWrapper}>
                            <h1 className={styles.header}>{course.name}</h1>
                            <p className={styles.descrText}>{course.header}</p>

                            <div className={styles.itemsBlockWrapper}>
                                {arrayItemsData.map((item, index) => (
                                    <div key={item.header + index} className={item.style}>
                                        <Image
                                            className={styles.image}
                                            src={item.icon}
                                            alt={'item'}
                                            width={item.width}
                                            height={item.height}
                                        />

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

            <section className={styles.learnInfo} style={{ backgroundColor: course.color }}>
                <div className={classNames('container', styles.blockInfoWrapper)}>
                    <h2 className={'header'}>{t('CoursesPage:headerBlockSkills')}</h2>

                    {arrayListSkills.map((item, index) => (
                        <div key={index} className={item.view ? styles.blockList : 'close'}>
                            <span className={styles.headerList} style={{ backgroundColor: course.color }}>
                                {item.header}
                            </span>

                            <ul className={styles.list}>
                                {item.list.map((item, index) => (
                                    <li className={styles.item} key={item.item + index}>
                                        <span style={{ backgroundColor: course.color }}></span>
                                        <p>{item.item}</p>
                                    </li>
                                ))}
                            </ul>
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

                        <div className={styles.cardPrice} style={{ backgroundColor: course.color }}>
                            <div className={styles.category}>
                                {course.categories.map((category, index) => (
                                    <div className={styles.categoryItem} key={category.item + index}>
                                        {category.item}
                                    </div>
                                ))}
                            </div>

                            <p className={styles.priceText}>{t('CoursesPage:price')}</p>

                            <div className={styles.priceContainer}>
                                <div className={Boolean(course.priceCourse.discount) ? styles.discount : 'close'}>
                                    {course.priceCourse.price}
                                </div>

                                <div className={Boolean(course.priceCourse.discount) ? styles.price : styles.discount}>
                                    {(course.priceCourse.price / 100) * (100 + course.priceCourse.discount!)}
                                </div>
                            </div>
                        </div>
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
