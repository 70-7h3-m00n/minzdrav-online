import React from 'react'
import { arrayRouterLinks } from '@/src/data/arrayRouterLinks'
import Link from 'next/link'
import Button from '@/src/components/Button'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Locale from '@/src/components/Locale'
import BurgerMenu from '@/src/components/BurgerMenu'

const MenuHeader = (): JSX.Element => {
    const { t } = useTranslation()
    const { pathname } = useRouter()

    return (
        <nav className={styles.nav}>
            {arrayRouterLinks.map((linkData, index) =>
                pathname === linkData.link ? (
                    <div
                        key={index}
                        className={classNames([styles.link, pathname === linkData.link && styles.linkActive])}
                    >
                        {t(`navLinksHeader:${linkData.text}`)}
                    </div>
                ) : (
                    <Link className={styles.link} key={index} href={linkData.link}>
                        {t(`navLinksHeader:${linkData.text}`)}
                    </Link>
                ),
            )}

            {/*<div className={styles.media}>*/}
            {/*    <Locale />*/}
            {/*</div>*/}

            <Button text={t('header:buttonEnter')} link={'https://sdo-ipo.ru/login/index.php'} />

            <BurgerMenu />
        </nav>
    )
}

export default MenuHeader
