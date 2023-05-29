import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import styles from './sryles.module.scss'
import classNames from 'classnames'
import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'

interface CardDirectionProps {
    imageSrc: string | StaticImageData
    textLink: string
    colorBtn: string
    contentTab: EnumContentToggle
}

const CardDirection = observer(({ imageSrc, textLink, colorBtn, contentTab }: CardDirectionProps): JSX.Element => {
    const { toggle } = useContentToggle()

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    alt={textLink}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                />
            </div>

            <Link
                className={classNames([colorBtn, styles.link])}
                onClick={() => toggle(contentTab)}
                href={'/directions'}
            >
                {textLink}
            </Link>
        </div>
    )
})

export default CardDirection
