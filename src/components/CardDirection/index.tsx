import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from './sryles.module.scss'
import classNames from 'classnames'

interface CardDirectionProps {
    imageSrc: string | StaticImageData
    textLink: string
    colorBtn: string
    link: string
}

const CardDirection = ({ imageSrc, textLink, colorBtn, link }: CardDirectionProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    alt={textLink}
                    fill
                    sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                />
            </div>

            <Link className={classNames([colorBtn, styles.link])} href={link}>
                {textLink}
            </Link>
        </div>
    )
}

export default CardDirection
