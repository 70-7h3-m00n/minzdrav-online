import React, { useState } from 'react'
import styles from './styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import imagePsych from '@/public/images/brains.png'
import ArrowUp from '@/src/components-svg/arrowUp'
import ArrowDown from '@/src/components-svg/arrowDown'

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
            <motion.div
                className={styles.wrapperAccordion}
                onClick={() => setVisible(!isVisible)}
                viewport={{ once: true }}
                style={{
                    backgroundColor: color,
                }}
                initial={{
                    x: 1000,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ duration: 1.5 }}
            >
                <div className={styles.wrapperContent}>
                    {category.map((item, index) => (
                        <div key={index} className={styles.category}>
                            {item.item}
                        </div>
                    ))}

                    <h3 className={styles.header}>{data.header}</h3>
                    <div className={styles.data}>3 модуля</div>
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

                        <div className={styles.arrow}>{isVisible ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                </div>
            </motion.div>

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