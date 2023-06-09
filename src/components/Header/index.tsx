import React from 'react'
import Logo from '@/src/components/Logo'
import logoUrl from '@/public/images/logo-header.png'
import { useTranslation } from 'next-i18next'
import Button from '@/src/components/Button'
import MenuHeader from '@/src/features/menu/MenuHeader/components/MenuHeader'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Locale from '@/src/components/Locale'

const Header = () => {
    const { t } = useTranslation('header')
    const router = useRouter()
    const active = router.asPath === '/directions'
    return (
        <header className={styles.header}>
            <div className={styles.local}>
                <Locale />
            </div>
            <div className={classNames(['container', styles.nawBlock])}>
                <div className={styles.contentWrapperLeft}>
                    <Logo imageUrl={logoUrl} />

                    <div className={styles.media}>
                        <Button text={t('areasStudy')} link={'/directions'} active={active} />
                    </div>
                </div>

                <MenuHeader />
            </div>
        </header>
    )
}

export default Header
