import React, { useState } from 'react'
import styles from './styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

interface AccordionSyllabusProps {
    data: { header: string; description: string }
    indexModule?: number
}

const AccordionSyllabus = ({ data, indexModule }: AccordionSyllabusProps) => {
    const { t } = useTranslation()
    const [isVisible, setVisible] = useState(false)

    const animate = isVisible ? { height: 'auto' } : {}
    return (
        <div className={styles.container}>
            <div className={styles.wrapperHeader}>
                <div className={styles.wrapper}>
                    <div className={styles.module}>
                        {indexModule} {t('common:module')}
                    </div>

                    <p className={styles.text}>{data.header}</p>
                </div>

                <div className={!isVisible ? styles.btn : styles.activeBtn} onClick={() => setVisible(!isVisible)} />
            </div>

            <AnimatePresence>
                <motion.div
                    className={classNames(styles.wrapperContent)}
                    initial={{ height: 0 }}
                    animate={animate}
                    exit={{ height: 0 }}
                >
                    <p className={styles.text}>{data.description}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default AccordionSyllabus
