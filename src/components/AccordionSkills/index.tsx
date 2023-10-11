import React, { useState } from 'react'
import styles from './styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import imagePsych from '@/public/images/brains.png'
import ArrowUp from '@/src/components-svg/ArrowUp'
import ArrowDown from '@/src/components-svg/ArrowDown'

interface AccordionSkillsProps {
    color: string
    data: {
        header: string
        list: Array<{ item: string }>
        view: boolean
    }
    category: Array<{ item: string }>
}

const AccordionSkills = ({ color, data, category }: AccordionSkillsProps) => {
    const [isVisible, setVisible] = useState(false)

    const animateList = isVisible ? { height: 'auto' } : {}
    const animateItem = isVisible ? { opacity: 1 } : {}

    return (
        <div className={data.view ? styles.blockList : 'close'}>
            <div
                className={styles.wrapperAccordion}
                onClick={() => setVisible(!isVisible)}
                style={{
                    backgroundColor: color,
                }}
            >
                <div className={styles.wrapperContent}>
                    <h3 className={styles.header}>{data.header}</h3>
                </div>

                <div className={styles.wrapperIcon}>
                    <div className={styles.wrapperArrow}>
                        <div className={styles.image}>
                            <Image
                                src={imagePsych}
                                alt={''}
                                priority
                                fill
                                sizes='(max-width: 768px) 100vw,
                                  (max-width: 1200px) 50vw,
                                  33vw'
                            />
                        </div>

                        <div className={styles.arrow}>{!isVisible ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                <motion.ul initial={{ height: 0 }} animate={animateList} exit={{ height: 0 }}>
                    {data.list.map((item, index) => (
                        <motion.li
                            className={styles.item}
                            key={index}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            animate={animateItem}
                        >
                            <span style={{ backgroundColor: color }}></span>
                            <p>{item.item}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </div>
    )
}

export default AccordionSkills
