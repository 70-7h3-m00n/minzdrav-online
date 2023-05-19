import React, { forwardRef } from 'react'
import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

export interface CardPartnersProps {
    partner?: string
    iconUrl?: string | StaticImageData
}

const CardPartners = forwardRef<HTMLDivElement, CardPartnersProps>(function ({ partner, iconUrl }, ref) {
    return (
        <div ref={ref} className={styles.wrapperCard}>
            <div className={styles.wrapperImage}>
                <Image
                    src={iconUrl!}
                    alt={partner!}
                    fill
                    priority={false}
                    sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                />
            </div>
            <p className={styles.text}>{partner}</p>
        </div>
    )
})

CardPartners.displayName = 'CardPartners'

export default CardPartners
