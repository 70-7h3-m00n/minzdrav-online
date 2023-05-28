import React from 'react'
import Logo from '@/src/components/Logo'
import logoUrl from '@/public/images/logo-header.png'
import { useTranslation } from 'next-i18next'
import Button from '@/src/components/Button'
import MenuHeader from '@/src/features/menu/MenuHeader/components/MenuHeader'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

const Header = () => {
    const { t } = useTranslation('header')
    const router = useRouter()
    return (
        <header className={classNames(['container', styles.header])}>
            <div className={styles.contentWrapperLeft}>
                <Logo imageUrl={logoUrl} />

                {router.asPath !== '/directions' && <Button text={t('areasStudy')} link={'/directions'} />}
            </div>
            <MenuHeader />
        </header>
    )
}

export default Header
