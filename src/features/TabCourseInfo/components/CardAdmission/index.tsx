import React from 'react'
import styles from './styles.module.scss'

interface CardAdmissionProps {
    data: { item: string }
    index: number
}

const CardAdmission = ({ data, index }: CardAdmissionProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>{index}</div>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.item,
                }}
            />
        </div>
    )
}

export default CardAdmission
