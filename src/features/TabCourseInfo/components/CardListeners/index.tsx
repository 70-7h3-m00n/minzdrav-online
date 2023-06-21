import React from 'react'
import styles from './styles.module.scss'

interface CardListenersProps {
    data: { item: string }
}

const CardListeners = ({ data }: CardListenersProps) => {
    return (
        <div
            className={styles.cardWrapper}
            dangerouslySetInnerHTML={{
                __html: data.item,
            }}
        />
    )
}

export default CardListeners
