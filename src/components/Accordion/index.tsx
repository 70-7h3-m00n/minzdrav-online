import styles from './styles.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import ArrowUp from '@/src/components-svg/ArrowUp'
import ArrowDown from '@/src/components-svg/ArrowDown'
import Button from '@/src/components/Button'
import ItemLi from '@/src/components-svg/ItemLi'
import Image from 'next/image'
import imageDiet from '@/public/images/fruit.png'
import imagePsych from '@/public/images/brains.png'
import { motion } from 'framer-motion'
import { CourseName } from '@/src/api/fetchCoursesName/types'

interface AccordionProps {
    data: CourseName
    icon: 'dietetics' | 'psychology'
}

const Accordion = ({ icon, data }: AccordionProps): JSX.Element => {
    const { t } = useTranslation()
    const [toggleContent, setToggleContent] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)

    const toggleContentStyle = toggleContent ? styles.open : styles.close
    const openDescrStyle = openDescription ? styles.close : styles.description
    const toggleImageStyles = openDescription ? styles.contentEnd : styles.contentStart
    const toggleBtn = !openDescription ? styles.wrapperBtn : styles.close

    if (data === undefined) return <></>
    return (
        <>
            <motion.div
                className={styles.wrapperAccordion}
                onClick={() => setToggleContent(!toggleContent)}
                style={{
                    backgroundColor: data.color,
                }}
                initial={{
                    x: 1000,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
            >
                <div className={styles.wrapperContent}>
                    {data.categories.map((item, index) => (
                        <div key={index} className={styles.category}>
                            {item.item}
                        </div>
                    ))}

                    <h3 className={styles.header}>{data.name}</h3>
                    <div className={styles.data}>{data.durationTraining} месяцев</div>
                </div>

                <div className={styles.wrapperIcon}>
                    <div className={styles.wrapperArrow}>
                        <div className={styles.image}>
                            <Image
                                src={icon === 'dietetics' ? imageDiet : imagePsych}
                                alt={''}
                                priority
                                fill
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>

                        <div className={styles.arrow}>{!toggleContent ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                </div>
            </motion.div>

            <div className={classNames([styles.contentBlock, toggleContentStyle])}>
                <h3 className={styles.header}>{t('Accordion:header')}</h3>

                <div className={toggleImageStyles}>
                    <div className={styles.one}>
                        <div className={classNames([styles.wrapperImage, openDescription && styles.bigWrapper])}>
                            <Image
                                src={data.subInfoContent[0].image[0].url}
                                fill
                                alt={'image'}
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>
                        <p className={openDescrStyle}>{data.subInfoContent[0].description}</p>
                    </div>

                    <div className={styles.two}>
                        <div className={styles.wrapperImage}>
                            <Image
                                src={data.subInfoContent[1].image[0].url}
                                fill
                                alt={'image'}
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>
                        <p className={openDescrStyle}>{data.subInfoContent[1].description}</p>
                    </div>

                    <div className={styles.three}>
                        <div className={styles.wrapperImage}>
                            <Image
                                src={data.subInfoContent[2].image[0].url}
                                fill
                                alt={'image'}
                                sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                            />
                        </div>
                        <p className={openDescrStyle}>{data.subInfoContent[2].description}</p>
                    </div>

                    <div className={classNames([styles.four, !openDescription && styles.close])}>
                        <h3 className={styles.header}>
                            Начинающим психологам, педагогам, дефектологам, логопедам и воспитателям, чтобы
                        </h3>

                        <ul className={styles.listItems}>
                            {data.subInfoText.map((item, index) => (
                                <li key={index}>
                                    <ItemLi className={styles.icon} />

                                    <p className={styles.text}>{item.item}</p>
                                </li>
                            ))}
                        </ul>
                        <Button style={styles.link} text={t('common:goCourse')} link={`/courses/${data.pathCourse}`} />
                    </div>
                </div>

                <div className={toggleBtn}>
                    <Button style={styles.btn} text={t('common:goCourse')} link={`/courses/${data.pathCourse}`} />

                    <button className={styles.btn} onClick={() => setOpenDescription(true)}>
                        {t('common:learnMore')}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Accordion
