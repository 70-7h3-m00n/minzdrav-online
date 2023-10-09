import styles from './styles.module.scss'
import { Webinar } from '@/src/api/fetchWebinars/types'
import { useTranslation } from 'next-i18next'
import {useState} from "react";

interface Props {
    data: Array<Webinar> | undefined
    onDataWebinar(filter: string): Promise<void>
}

const FilterWebinars = ({ data, onDataWebinar }: Props) => {
    const [filterWebinars, setFilterWebinars] = useState('allCategory')
    const { t } = useTranslation()

    const category = [
        ...new Set(
            data?.reduce(
                (accumulator: Array<string>, currentValue) => {
                    return accumulator.concat(currentValue.category)
                },
                ['allCategory'],
            ),
        ),
    ]

    return (
        <div className={styles.wrapperBlock}>
            <h2 className={'header'}>Вебинары</h2>
            <div className={styles.wrapperCategory}>
                {category.map((item, index) => (
                    <div
                        className={filterWebinars !== item ? styles.btnCategory : styles.btnActive}
                        onClick={() => onDataWebinar(item)}
                        key={index}
                    >
                        {t(item)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterWebinars
