import styles from './styles.module.scss'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

interface FilterTrainingProps {
    data: string[]
    setFilterTraining: Dispatch<SetStateAction<string>>
}

const FilterTraining = ({ data, setFilterTraining }: FilterTrainingProps) => {
    const { t } = useTranslation()
    const [ActiveBtn, setActiveBtn] = useState(0)

    useEffect(() => {
        setActiveBtn(0)
    }, [data])

    return (
        <div className={styles.typeTrainingWrapper}>
            <h2 className={styles.headerFilter}>{t('common:typeTraining')}</h2>

            <div>
                {data.length === 2 ? (
                    <div className={styles.wrapperCheck}>
                        <div className={styles.active} />

                        <p className={styles.text}>{data[1]}</p>
                    </div>
                ) : (
                    data?.map((training, i) => (
                        <div
                            key={i + training}
                            className={styles.wrapperCheck}
                            onClick={() => {
                                setFilterTraining(training)
                                setActiveBtn(i)
                            }}
                        >
                            <div className={classNames(styles.check, ActiveBtn === i && styles.active)} />

                            <p className={styles.text}>{training}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default FilterTraining
