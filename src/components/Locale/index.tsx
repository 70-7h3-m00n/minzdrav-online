import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion, Variants } from 'framer-motion'

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const listLocale = ['kk', 'uz', 'en', 'ru']

const Locale = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className={router.asPath === '/directions' ? 'close' : styles.locale}
        >
            <motion.button className={styles.btn} whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
                {router.locale?.toUpperCase()}
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg className={styles.arrow} xmlns='http://www.w3.org/2000/svg' width='8px' height='4px'>
                        <path
                            stroke='#fff'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeMiterlimit={10}
                            strokeWidth={1.5}
                            d='M9 1 5.707 4.675a.93.93 0 0 1-1.414 0L1 1'
                        />
                    </svg>
                </motion.div>
            </motion.button>
            <motion.ul
                className={styles.list}
                variants={{
                    open: {
                        clipPath: 'inset(0% 0% 0% 0% round 10px)',
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                        },
                    },
                    closed: {
                        clipPath: 'inset(10% 50% 90% 50% round 10px)',
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.3,
                        },
                    },
                }}
            >
                {listLocale.map((locale, index) => (
                    <motion.li key={index} variants={itemVariants} onClick={() => setIsOpen(!isOpen)}>
                        <Link className={styles.link} href={router.asPath} locale={locale}>
                            {locale.toUpperCase()}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    )
}

export default Locale
