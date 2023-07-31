import { observer } from 'mobx-react-lite'
import { GetStaticProps } from 'next'
import styles from '@/styles/pages-styles/AboutUniversity.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import imgHeader from '@/public/images/specialist.png'
import { InstituteStatisticsData } from '@/src/data/InstituteStatisticsData'
import fetchCoursesName from '@/src/api/fetchCoursesName'
import { specialistsExpertsData } from '@/src/data/specialistsExpertsData'
import Link from 'next/link'
import { mapInstitute } from '@/src/features/Map/store/Map'
import { Map } from '@/src/features/Map'
import classNames from 'classnames'
import Slider from '@/src/components/Slider'
import CardSpeaker from '@/src/components/CardSpeaker'
import React, { useState } from 'react'
import { fetchSpeakers } from '@/src/api/fetchSpeakers'
import { fetchLicenses } from '@/src/api/fetchLicenses'
import { fetchLicensesDocs } from '@/src/api/fetchLicensesDocs'
import CardPDF from '@/src/components/CardPDF'
import { fetchReviews } from '@/src/api/fetchReviews'
import CardReviews from '@/src/components/CardReviews'

interface AboutUniversityPage {
    courses: Awaited<ReturnType<typeof fetchCoursesName>>
    speakers: Awaited<ReturnType<typeof fetchSpeakers>>
    licenses: Awaited<ReturnType<typeof fetchLicenses>>
    licensesDocs: Awaited<ReturnType<typeof fetchLicensesDocs>>
    reviews: Awaited<ReturnType<typeof fetchReviews>>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const courses = await fetchCoursesName(locale!)
    const speakers = await fetchSpeakers(locale!)
    const licenses = await fetchLicenses(locale!)
    const licensesDocs = await fetchLicensesDocs(locale!)
    const reviews = await fetchReviews(locale!)

    return {
        props: {
            courses,
            speakers,
            licenses,
            licensesDocs,
            reviews,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
        revalidate: 120,
    }
}

function AboutUniversityPage({ courses, speakers, licenses, licensesDocs, reviews }: AboutUniversityPage) {
    const { t } = useTranslation()
    const { onToggleEvents } = mapInstitute
    const [counterReviews, setCounterReviews] = useState(reviews.length <= 3 ? reviews.length : 3)

    const onCounterReviews = () => {
        const result = counterReviews + 3
        if (counterReviews <= reviews.length) {
            setCounterReviews(result)
        }
        if (result > reviews.length) {
            setCounterReviews(counterReviews + (reviews.length - counterReviews))
        }
    }

    return (
        <>
            <NextSeo title={'Об университете'}  />

            <div onClick={() => onToggleEvents(false)}>
                <section className={'container'}>
                    <h2 className={'header'}>
                        Институт
                        <span className={styles.colorHeader}> медицинского </span>
                        образования
                    </h2>

                    <div className={styles.containerHeader}>
                        <div className={styles.containerDescriptionHeader}>
                            <p>
                                Российский институт дополнительного профессионального образования «ИПО» – это удобное и
                                быстрое получение дополнительного профобразования и повышения квалификации в сети
                                интернет по востребованным на рынке гуманитарным, техническим и бизнес направлениям.
                            </p>
                            <br />
                            <p>
                                Наша миссия - дать каждому с доступом к интернету возможность удобного повышения
                                квалификации, получения дополнительной профессии, поддержания актуальных знаний и
                                навыков в быстроразвивающемся мире.
                            </p>
                            <br />
                            <p>
                                Нашим учащимся предоставлены коммуникационная инфосреда на базе личного кабинета и
                                персональный куратор, решающий любые вопросы и администрирующий учебный процесс вплоть
                                до сокращения сроков обучения и получения установленного Министерством образования и
                                науки РФ удостоверения или диплома.
                            </p>
                        </div>

                        <div className={styles.containerImageHeader}>
                            <Image
                                className={styles.imgHeader}
                                src={imgHeader}
                                alt={'home'}
                                priority
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                                sizes='33vw'
                            />
                        </div>
                    </div>

                    <div className={styles.containerStatistic}>
                        <p className={styles.statisticTitle}>
                            Мы предлагаем большой выбор курсов для профессионального и личностного развития.
                        </p>

                        <div className={styles.containerCard}>
                            {InstituteStatisticsData.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ backgroundColor: item.color }}
                                    className={styles.statisticsCard}
                                >
                                    <div className={styles.counter}>
                                        {item.statistic === 'Курсов'
                                            ? courses?.length.toLocaleString('ru-RU')
                                            : item.counter.toLocaleString('ru-RU')}
                                    </div>

                                    <div className={styles.statistic}>{item.statistic}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={'container'}>
                    <h2 className={'header'}>Делаем специалистов экспертами</h2>

                    <div className={styles.expertsContainer}>
                        {specialistsExpertsData.map((item, index) => (
                            <div key={index} className={styles.cardExperts}>
                                <Image
                                    src={item.image}
                                    priority
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                    }}
                                    sizes='33vw'
                                    alt={'imge'}
                                />

                                <h3>{item.title}</h3>

                                <p className={styles.expertsDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={classNames('container', reviews.length === 0 || false ? 'close' : '')}>
                    <h3 className={'header'}>Отзывы</h3>

                    <div className={styles.reviewsContainer}>
                        {reviews?.slice(0, counterReviews)?.map((item, i) => (
                            <CardReviews
                                key={i}
                                img={item.image[0].url}
                                title={item.title}
                                description={item.description}
                            />
                        ))}

                        <button
                            onClick={() => onCounterReviews()}
                            className={classNames(styles.btnReviews, counterReviews === reviews.length ? 'close' : '')}
                        >
                            Показать еще
                        </button>
                    </div>
                </section>

                <section className={speakers.length === 0 || false ? 'close' : ''}>
                    <br />
                    <h2 className={'container header'}>Наши спикеры</h2>

                    <Slider>
                        <>
                            {speakers?.map((speaker, index) => (
                                <CardSpeaker
                                    key={speaker.name + index}
                                    name={speaker.name}
                                    description={speaker.description}
                                    image={speaker.image[0].url}
                                />
                            ))}
                        </>
                    </Slider>
                </section>

                <section
                    className={classNames(
                        'container',
                        (licenses.length === 0 || false) && (licensesDocs.length === 0 || false) ? 'close' : '',
                    )}
                >
                    <h2 className={'header'}>Наши лицензии</h2>

                    <ul className={classNames(styles.licensesList, licenses.length === 0 || false ? 'close' : '')}>
                        {licenses.map((licenses, index) => (
                            <li key={licenses.description + index}>
                                <Image
                                    src={licenses.image[0].url}
                                    alt={licenses.description}
                                    priority
                                    sizes='33vw'
                                    width={244}
                                    height={332}
                                />

                                <p>{licenses.description}</p>
                            </li>
                        ))}
                    </ul>

                    <ul className={classNames(styles.licensesPDF, licensesDocs.length === 0 || false ? 'close' : '')}>
                        {licensesDocs?.map((item, i) => (
                            <CardPDF key={i} description={item.description} link={item.document[0].url} />
                        ))}
                    </ul>
                </section>
            </div>

            <section>
                <h2
                    onClick={() => onToggleEvents(false)}
                    className={classNames('header', 'container', styles.mapHeader)}
                >
                    Контакты
                </h2>

                <div className={styles.containerMapInfo}>
                    <Map.WrapperMap />

                    <div className={'container'} onClick={() => onToggleEvents(false)}>
                        <div className={styles.cardInfoAddresses}>
                            <h3>Москва, Ул. Дербеневская набережная 11</h3>
                            <Link href={'tel:+74952606671'}>+7 (495) 260-66-71</Link>
                            <Link href={'tel:+78005551294'}>+7 (800) 555-12-94</Link>
                            <div>orders@mededucation.ru</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default observer(AboutUniversityPage)
