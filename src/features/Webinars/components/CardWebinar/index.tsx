import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Webinar } from '@/src/api/fetchWebinars/types'
import colorCategory from '@/src/data/colorCategory'

interface Props {
    data: Webinar
}

const CardWebinar = ({ data }: Props) => {
    const route = useRouter()
    const currentData = new Date()
    const timeWebinar = new Date(data.startTime)
    const showButton = currentData.getTime() < timeWebinar.getTime()

    const color = colorCategory.filter(item => item.category === data.category)[0].color

    return (
        <div className={styles.card} onClick={() => route.push(`/webinars/${data.slug}`)}>
            <div className={styles.wrapperImage}>
                <div
                    className={styles.categoryCard}
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {data.category}
                </div>

                <Image
                    src={data.image[0].url}
                    alt={'image'}
                    fill
                    sizes='(max-width: 1200px) 50vw, 33vw'
                    priority
                    style={{
                        objectFit: 'cover',
                    }}
                />
                {showButton ? <button className={styles.btnCard}>Принять участие</button> : <></>}
            </div>

            <p className={styles.titleCard}>{data.description}</p>

            <div className={styles.timeWebinar}>{timeWebinar.toLocaleString()}</div>
        </div>
    )
}

export default CardWebinar
