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
            <div className={styles.wrapperImage}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={false}
                    sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                />
            </div>
            <p className={styles.description}>{text}</p>
        </div>
    )
}

export default CardResources
