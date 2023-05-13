import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const Locale = () => {
    return (
        <div className={styles.locale}>
            <Link href={''} locale={'ja'}>
                ja
            </Link>
            ,
            <br />
            <Link href={''} locale={'kk'}>
                kk
            </Link>
            <br />
            <Link href={''} locale={'uz'}>
                uz
            </Link>
            <br />
            <Link href={''} locale={'en'}>
                en
            </Link>
            <br />
            <Link href={''} locale={'ru'}>
                ru
            </Link>
        </div>
    )
}

export default Locale
