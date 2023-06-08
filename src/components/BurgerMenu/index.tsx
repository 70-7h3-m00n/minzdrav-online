import React, { useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import { arrayRouterLinks } from '@/src/features/menu/MenuHeader/utils/arrayRouterLinks'
import uuid from 'react-uuid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { animation } from '@/src/components/BurgerMenu/animation'
import SvgClose from '@/src/components-svg/close'
import SvgBurger from '@/src/components-svg/burger'

const BurgerMenu = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useRouter()

    return (
        <motion.nav className={classNames(styles.burgerMenu)} initial={false} animate={isOpen ? 'open' : 'closed'}>
            <motion.button className={styles.btn} whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <SvgBurger /> : <SvgClose />}
            </motion.button>

            <motion.ul className={styles.wrapperLinks} variants={animation.list}>
                {arrayRouterLinks.map(linkData =>
                    pathname === linkData.link ? (
                        <motion.li
                            key={uuid()}
                            className={classNames([styles.link, pathname === linkData.link && styles.linkActive])}
                            variants={animation.item}
                        >
                            {t(`navLinksHeader:${linkData.text}`)}
                        </motion.li>
                    ) : (
                        <motion.li key={uuid()} variants={animation.item}>
                            <Link className={styles.link} href={linkData.link} onClick={() => setIsOpen(!isOpen)}>
                                {t(`navLinksHeader:${linkData.text}`)}
                            </Link>
                        </motion.li>
                    ),
                )}
            </motion.ul>
        </motion.nav>
    )
}

export default BurgerMenu
