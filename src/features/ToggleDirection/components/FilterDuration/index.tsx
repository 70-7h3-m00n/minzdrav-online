import React, { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'

interface FilterDurationProps {
    durationTraining: number
    setDurationTraining: Dispatch<SetStateAction<number>>
}

const FilterDuration = ({ durationTraining, setDurationTraining }: FilterDurationProps): JSX.Element => {
    const { t } = useTranslation()

    return (
        <div className={styles.durationBlock}>
            <h2 className={styles.headerFilter}>{t('common:duration')}</h2>

            <label className={styles.durationLabel}>
                <div>От 1 до 24 месяцев</div>

                <input
                    className={styles.durationRange}
                    type={'range'}
                    min={1}
                    max={24}
                    value={durationTraining}
                    onChange={event => setDurationTraining(+event.target.value)}
                />
            </label>
        </div>
    )
}

export default FilterDuration
