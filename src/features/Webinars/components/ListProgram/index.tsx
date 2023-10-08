import React from 'react'
import styles from './styles.module.scss'
import { Item } from '@/src/api/types'

interface Props {
    header: string
    list: Item[]
}

const ListProgram = ({ header, list }: Props) => {
    return (
        <div className={styles.programBlock}>
            <h2 className={'header'}>{header}</h2>

            <div className={styles.listPrograms}>
                {list.map(item => (
                    <div key={item.id} className={styles.itemProgram}>
                        <div className={styles.fragment} />
                        <p className={styles.textProgram}>{item.item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListProgram
