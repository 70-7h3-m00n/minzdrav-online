import React, { useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import { arrayRouterLinks } from '@/src/features/menu/MenuHeader/utils/arrayRouterLinks'
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
            <motion.div
                tabIndex={0}
                className={styles.btn}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {!isOpen ? <SvgBurger /> : <SvgClose />}
            </motion.div>

            <motion.div className={styles.wrapperLinks} variants={animation.list}>
                <Link
                    className={classNames([
                        styles.link,
                        styles.directions,
                        pathname === '/courses-direction' && styles.linkActive,
                    ])}
                    href={'/courses-direction'}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {t('header:areasStudy')}
                </Link>

                {arrayRouterLinks.map((linkData, index) =>
                    pathname === linkData.link ? (
                        <motion.div
                            key={index}
                            className={classNames([styles.link, pathname === linkData.link && styles.linkActive])}
                            variants={animation.item}
                        >
                            {t(`navLinksHeader:${linkData.text}`)}
                        </motion.div>
                    ) : (
                        <motion.div key={index} variants={animation.item}>
                            <Link className={styles.link} href={linkData.link} onClick={() => setIsOpen(!isOpen)}>
                                {t(`navLinksHeader:${linkData.text}`)}
                            </Link>
                        </motion.div>
                    ),
                )}
            </motion.div>
        </motion.nav>
    )
}

export default BurgerMenu
