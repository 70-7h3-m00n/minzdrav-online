import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface InterfaceLogo {
    imageUrl: StaticImageData | string
    style?: string
}

const Logo = ({ style, imageUrl }: InterfaceLogo): JSX.Element => {
    const router = useRouter()
    const { t } = useTranslation('common')

    return router.pathname !== '/' ? (
        <Link className={classNames([styles.logo, style])} href={'/'}>
            <div className={styles.logo_image}>
                <Image
                    src={imageUrl}
                    alt={'logo'}
                    fill
                    loading={'lazy'}
                    sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                />
            </div>
            <p className={styles.logo_text}>{t('logo')}</p>
        </Link>
    ) : (
        <div className={classNames([styles.logo, style])}>
            <div className={styles.logo_image}>
                <Image
                    src={imageUrl}
                    alt={'logo'}
                    fill
                    priority
                    quality={100}
                    sizes='(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw'
                />
            </div>
            <p className={styles.logo_text}>{t('logo')}</p>
        </div>
    )
}

export default Logo
