import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import Link from 'next/link'

interface InterfaceLogo {
    imageUrl: StaticImageData | string
    style?: string
}

const Logo = ({ style, imageUrl }: InterfaceLogo): JSX.Element => {
    const { t } = useTranslation('common')

    return (
        <Link className={classNames([styles.logo, style])} href={'/'}>
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
        </Link>
    )
}

export default Logo
