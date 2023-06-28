import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styles from './style.module.scss'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'
import getFilterActions from '@/src/features/ToggleDirection/utils/getFilterActions'

interface FilterProgramProps {
    data: string[]
}

const FilterProgram = ({ data }: FilterProgramProps): JSX.Element => {
    const { t } = useTranslation()
    const { replace, query, pathname } = useRouter()
    const { categoryMedicine, filterProgram } = filterCourseStore.filterCourse
    const { setFilterProgram } = getFilterActions()
    const queryParams = getQueryData()

    const toggle = (program: string) => {
        if (program !== query.filterProgram) {
            replace(pathname, {
                query: {
                    ...queryParams,
                    filterProgram: program,
                },
            })
        }

        setFilterProgram(program)
    }

    useEffect(() => {
        setFilterProgram(t('common:allPrograms'))
    }, [categoryMedicine])

    useEffect(() => {
        if (query.filterProgram !== undefined && typeof query.filterProgram === 'string') {
            setFilterProgram(query.filterProgram)
        }
    }, [query, categoryMedicine])

    if (data.length === 1) return <div className={styles.toggleCategoryWrapper} />
    return (
        <div className={styles.toggleCategoryWrapper}>
            {data.length === 2 ? (
                <button className={styles.btnActive}>{data[1]}</button>
            ) : (
                data.map((program, i) => (
                    <button
                        key={i + program}
                        className={filterProgram === program ? styles.btnActive : styles.btnCategory}
                        onClick={() => filterProgram !== program? toggle(program): null}
                    >
                        {program}
                    </button>
                ))
            )}
        </div>
    )
}

export default observer(FilterProgram)
