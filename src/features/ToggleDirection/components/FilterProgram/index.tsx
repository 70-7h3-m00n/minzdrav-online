import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styles from './style.module.scss'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'

interface FilterProgramProps {
    data: string[]
}

const FilterProgram = ({ data }: FilterProgramProps): JSX.Element => {
    const { t } = useTranslation('common')
    const { replace, query, pathname } = useRouter()
    const { categoryMedicine, filterProgram, setFilterProgram } = filterCourseStore
    const queryParams = getQueryData()
    const allParams = t('allPrograms')

    const toggle = (program: string) => {
        if (program !== query.filterProgram) {
            replace(
                pathname,
                {
                    query: {
                        ...queryParams,
                        filterProgram: program,
                    },
                },
                { scroll: false },
            )
        }

        setFilterProgram(program)
    }

    const isBtnActive = (program: string) => {
        if (filterProgram === program) {
            return true
        }
        return t(filterProgram) === program
    }

    useEffect(() => {
        setFilterProgram(allParams)
    }, [categoryMedicine, allParams])

    useEffect(() => {
        if (query.filterProgram !== undefined && typeof query.filterProgram === 'string') {
            setFilterProgram(query.filterProgram)
        }
    }, [query, categoryMedicine])

    if (data.length === 1) return <div className={styles.toggleCategoryWrapper} />
    return (
        <>
            <div className={data.length === 2 ? styles.toggleCategoryWrapper : 'close'}>
                <button className={styles.btnActive}>{data[1]}</button>
            </div>

            <div className={data.length > 2 ? styles.toggleCategoryWrapper : 'close'}>
                {data.map((program, i) => (
                    <button
                        key={program + i}
                        className={isBtnActive(program) ? styles.btnActive : styles.btnCategory}
                        onClick={() => (filterProgram !== program ? toggle(program) : null)}
                    >
                        {program}
                    </button>
                ))}
            </div>
        </>
    )
}

export default observer(FilterProgram)
