import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

interface FilterTrainingProps {
    data: string[]
}

const FilterTraining = ({ data }: FilterTrainingProps) => {
    const { setFilterTraining } = filterCourseStore
    const { categoryMedicine } = filterCourseStore.filterCourse
    const { t } = useTranslation()
    const [ActiveBtn, setActiveBtn] = useState(0)

    useEffect(() => {
        setActiveBtn(0)
        setFilterTraining('')
    }, [categoryMedicine])

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
                                setActiveBtn(i)
                                setFilterTraining(training)
                            }}
                        >
                            <div className={classNames(styles.check, ActiveBtn === i && styles.active)} />

                            <p className={styles.text}>{t(`common:${training}`)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default observer(FilterTraining)
