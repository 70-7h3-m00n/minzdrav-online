import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'

interface CardResourcesProps {
    src: string | StaticImageData
    alt: string
    text: string
}

const CardResources = ({ src, alt, text }: CardResourcesProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Image
                src={src}
                alt={alt}
                width={70}
                height={68}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                placeholder={'blur'}
                blurDataURL={typeof src === 'string' ? src : ''}
            />

            <p className={styles.description}>{text}</p>
        </div>
    )
}

export default CardResources
