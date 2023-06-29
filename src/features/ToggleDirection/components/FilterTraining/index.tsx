import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'

interface FilterTrainingProps {
    data: string[]
}

const FilterTraining = ({ data }: FilterTrainingProps) => {
    const { t } = useTranslation()
    const { setFilterTraining } = filterCourseStore
    const { categoryMedicine, filterTraining } = filterCourseStore.filterCourse
    const { replace, query, pathname } = useRouter()
    const queryParams = getQueryData()

    const toggle = (training: string) => {
        if (training !== query.filterProgram) {
            replace(pathname, {
                query: {
                    ...queryParams,
                    filterTraining: training,
                },
            })
        }

        setFilterTraining(training)
    }

    useEffect(() => {
        setFilterTraining('any')
    }, [categoryMedicine])

    useEffect(() => {
        if (query.filterTraining !== undefined && typeof query.filterTraining === 'string') {
            setFilterTraining(query.filterTraining)
        }
    }, [query, categoryMedicine])

    if (data.length === 1) return <div className={styles.typeTrainingWrapper} />
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
                            onClick={() => (filterTraining !== training ? toggle(training) : null)}
                        >
                            <div className={classNames(styles.check, filterTraining === training && styles.active)} />

                            <p className={styles.text}>{t(`common:${training}`)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default observer(FilterTraining)
