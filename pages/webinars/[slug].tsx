import styles from '@/styles/pages-styles/Webinar.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getFilesName from '@/src/helper/getFilesName'
import fetchPathsWebinar from '@/src/api/fetchPathsWebinar'
import fetchWebinar from '@/src/api/fetchWebinar'
import time from '@/public/images/time.png'
import check from '@/public/images/check.png'
import webinarMockImage from '@/public/images/webinarMock.png'
import Image from 'next/image'
import classNames from 'classnames'
import colorCategory from '@/src/data/colorCategory'
import ListProgram from '@/src/features/Webinars/components/ListProgram'
import AccordionWebinar from '@/src/features/Webinars/components/AccordionWebinar'
import FormImage from '@/public/images/formInfo.png'
import RoundTick from '@/src/components-svg/RoundTick'
import PopUpWebinar from '@/src/features/Webinars/components/PopUpWebinar'
import FormWebinar from '@/src/features/Webinars/components/FormWebinar'

interface Props {
    webinar: Awaited<ReturnType<typeof fetchWebinar>>
}

const PageWebinar = ({ webinar }: Props) => {
    const timeWebinar = new Date(webinar!.startTime)
    const RuData = new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
    })

    const color = colorCategory.filter(item => item.category === webinar!.category)[0].color

    return (
        <div className={styles.pageBlock}>
            <section style={{ backgroundColor: color }}>
                <div className={classNames(['container', styles.headerBlock])}>
                    <div>
                        <div className={styles.availabilityBlock}>
                            <div className={styles.availability}>Открытый вебинар</div>

                            <div className={styles.startTime}>
                                <Image
                                    src={time}
                                    alt={'image'}
                                    priority
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />

                                <div className={styles.timeText} suppressHydrationWarning>
                                    {RuData.format(timeWebinar)} Мск
                                </div>
                            </div>
                        </div>

                        <div className={classNames(styles.speakerContainer, styles.mobile)}>
                            <div className={styles.speaker}>
                                <div className={styles.brImageFon} />

                                <Image
                                    src={webinar?.imageSpeaker[0].url!}
                                    fill
                                    alt={'image'}
                                    priority
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />

                                <div className={styles.wrapperInfoSpeaker}>
                                    <div className={styles.btnSpeaker}>Спикер вебинара</div>

                                    <div className={styles.name}>{webinar!.speaker}</div>

                                    <div className={styles.profession}>{webinar!.professionSpeaker}</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contentHeader}>
                            <h2 className={styles.header}>{webinar!.header}</h2>

                            <h3 className={styles.subHeader}>{webinar!.subHeader}</h3>
                        </div>

                        <div className={styles.listInfo}>
                            {webinar!.listInfoWebinar.map((item, i) => (
                                <div className={styles.itemInfo} key={i}>
                                    <Image
                                        src={check}
                                        alt={'check'}
                                        priority
                                        width={26}
                                        height={26}
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />

                                    <div>{item.item}</div>
                                </div>
                            ))}
                        </div>

                        <button className={styles.btnBook} style={{ color }}>
                            Забронировать место
                        </button>
                    </div>

                    <div className={styles.desktop} style={{ position: 'relative' }}>
                        <div className={styles.brImageFon} />

                        <div className={styles.speaker}>
                            <Image
                                src={webinar?.imageSpeaker[0].url!}
                                fill
                                alt={'image'}
                                priority
                                style={{
                                    objectFit: 'cover',
                                }}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />

                            <div className={styles.wrapperInfoSpeaker}>
                                <div className={styles.btnSpeaker}>Спикер вебинара</div>

                                <div className={styles.name}>{webinar!.speaker}</div>

                                <div className={styles.profession}>{webinar!.professionSpeaker}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classNames('container', styles.webinarDescriptionBlock)}>
                <h2 className={classNames('header', styles.desktop)}>Описание вебинара</h2>

                <div className={styles.wrapperDescription}>
                    <div className={styles.block} dangerouslySetInnerHTML={{ __html: webinar!.descriptionWebinar }} />

                    <h2 className={classNames('header', styles.mobile)}>Описание вебинара</h2>

                    <div className={styles.blockImage}>
                        <Image
                            src={webinarMockImage}
                            priority
                            fill
                            alt={'webinarMockImage'}
                            style={{ objectFit: 'cover' }}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                </div>
            </section>

            <section className={styles.listsPrograms} style={{ backgroundColor: color }}>
                <div className={'container'}>
                    <div className={styles.wrapperPrograms}>
                        <ListProgram header={'Программа вебинара'} list={webinar!.listWebinarProgram} />

                        <ListProgram header={'Для кого вебинар'} list={webinar!.listWhichProfessions} />

                        <ListProgram header={'Продолжительность вебинара'} list={webinar!.listDuration} />
                    </div>
                </div>
            </section>

            <section className={'container'}>
                <PopUpWebinar />

                <div className={styles.speakerWrapperInfo}>
                    <div className={styles.speakerInfo}>
                        <Image
                            src={webinar?.imageSpeaker[0].url!}
                            fill
                            alt={'image'}
                            priority
                            style={{
                                objectFit: 'cover',
                            }}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>

                    <div className={styles.infoWrapper}>
                        <div className={styles.headerSpeaker}>Ведущий вебинара</div>

                        <div className={styles.nameSpeaker}>{webinar?.speaker}</div>

                        <div className={styles.listSpeaker}>
                            {webinar?.listTeacherCharacteristics.map(item => (
                                <div className={styles.item} key={item.id}>
                                    <RoundTick />

                                    <p>{item.item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: color }}>
                <div className={classNames(['container', styles.formBlock])}>
                    <div>
                        <div className={styles.availabilityBlock}>
                            <div className={styles.availability}>Открытый вебинар</div>

                            <div className={styles.startTime}>
                                <Image
                                    src={time}
                                    alt={'image'}
                                    priority
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />

                                <div className={styles.timeText} suppressHydrationWarning>{RuData.format(timeWebinar)} Мск</div>
                            </div>
                        </div>

                        <div>
                            <h2 className={styles.header}>{webinar!.header}</h2>

                            <h3 className={styles.subHeader}>{webinar!.subDescription}</h3>

                            <div className={styles.infoFormWrapper}>
                                <Image
                                    src={FormImage}
                                    alt={'FormImage'}
                                    width={180}
                                    height={180}
                                    className={styles.image}
                                />
                                <p className={styles.textInfoForm}>{webinar?.formDescription}</p>
                            </div>
                        </div>
                    </div>

                    <FormWebinar />
                </div>
            </section>

            <section className={classNames('container', styles.desktop)}>
                <h2 className={'header'}>Часто задаваемые вопросы</h2>

                <div className={styles.wrapperAccordion}>
                    {webinar?.FAQ.map(item => (
                        <AccordionWebinar colorFragment={color} header={item.header} description={item.description} key={item.id} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const paths = (
        await Promise.all(
            locales!.map(async local => {
                const data = await fetchPathsWebinar(local)
                return data!.map(webinar => ({
                    params: { slug: webinar.slug },
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
    const webinar = await fetchWebinar(locale!, String(params!.slug))

    return {
        props: {
            webinar,
            ...(await serverSideTranslations(locale!, getFilesName('public/locales/ru'))),
        },
    }
}

export default PageWebinar
