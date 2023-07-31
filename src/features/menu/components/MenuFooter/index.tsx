import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { arrayRouterLinksFooter } from '@/src/data/arrayRouterLinksFooter'
import Link from 'next/link'
import { contentToggleStore, EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'
import { useRouter } from 'next/router'

const MenuFooter = () => {
    const { t } = useTranslation('navLinksHeader')
    const { toggle } = contentToggleStore
    const { push } = useRouter()

    const onLink = (direction: EnumContentToggle) => {
        toggle(direction)
        push('/courses')
    }

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
                                    <div onClick={() => onLink(subLink.direction)}>{t(subLink.text)}</div>
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
