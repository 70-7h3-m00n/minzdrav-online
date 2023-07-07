import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface CardSpeakerProps {
    image: string
    name: string
    description: string
}

const CardSpeaker = ({ image, name, description }: CardSpeakerProps): JSX.Element => {
    return (
        <div className={styles.cardBlock}>
            <Image
                src={image}
                width={255}
                height={342}
                alt={name}
                sizes={'30vw'}
                style={{
                    objectFit: 'contain',
                    borderRight: '20px',
                }}
            />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default CardSpeaker
