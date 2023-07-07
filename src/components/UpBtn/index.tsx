import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useScrollY } from '@/src/hooks/useScrollY'

const UpBtn = () => {
    const controls = useAnimation()
    const y = useScrollY()

    useEffect(() => {
        controls.start({
            opacity: y / window.document.body.scrollHeight,
        })
    }, [y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <motion.div className={styles.up} onClick={scrollToTop} initial={{ opacity: 0 }} animate={controls}>
            <span className={styles.arrow} />
        </motion.div>
    )
}

export default UpBtn
