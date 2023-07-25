import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { observer } from 'mobx-react-lite'
import styles from './sryles.module.scss'
import classNames from 'classnames'
import { contentToggleStore, EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'

interface CardDirectionProps {
    imageSrc: string | StaticImageData
    textLink: string
    colorBtn: string
    contentTab: EnumContentToggle
}

const CardDirection = observer(({ imageSrc, textLink, colorBtn, contentTab }: CardDirectionProps): JSX.Element => {
    const { toggle } = contentToggleStore
    const { push } = useRouter()
    const queryParams = getQueryData()

    const setData = (type: EnumContentToggle) => {
        toggle(type)
        push({
            pathname: '/courses',
            query: {
                ...queryParams,
                direction: type,
            },
        })
    }

    return (
        <div className={styles.wrapper} onClick={() => setData(contentTab)}>
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

            <div className={classNames([colorBtn, styles.link])}>{textLink}</div>
        </div>
    )
})

export default CardDirection
