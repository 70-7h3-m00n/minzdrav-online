import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { arrayRouterLinksFooter } from '@/src/features/menu/MenuFooter/components/utils/arrayRouterLinksFooter'
import Link from 'next/link'

const MenuFooter = () => {
    const { t } = useTranslation('navLinksHeader')

    return (
        <nav className={styles.menuFooter}>
            {arrayRouterLinksFooter.map((link, index) =>
                link.link !== null ? (
                    <Link className={styles.menuFooter_link} key={index} href={link.link}>
                        {t(link.text)}
                    </Link>
                ) : (
                    <div key={index}>
                        <div className={styles.menuFooter_text}>{t(link.text)}</div>
                        <ul className={styles.menuFooter_subLinkContainer}>
                            {link.subLink?.map((subLink, i) => (
                                <li key={i} className={styles.menuFooter_subLinkContainer__link}>
                                    <Link href={subLink.link}>{t(subLink.text)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ),
            )}
        </nav>
    )
}

export default MenuFooter
