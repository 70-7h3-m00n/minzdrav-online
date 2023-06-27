import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useTranslation } from 'next-i18next'

interface FilterProgramProps {
    data: string[]
}

const FilterProgram = ({ data }: FilterProgramProps): JSX.Element => {
    const { t } = useTranslation()
    const [ActiveBtn, setActiveBtn] = useState(0)
    const { setFilterProgram } = filterCourseStore
    const { categoryMedicine } = filterCourseStore.filterCourse

    useEffect(() => {
        setActiveBtn(0)
        setFilterProgram(t('common:allPrograms'))
    }, [categoryMedicine])

    if (data === undefined) return <></>
    return (
        <div className={styles.toggleCategoryWrapper}>
            {data.length === 2 ? (
                <button className={styles.btnActive}>{data[1]}</button>
            ) : (
                data.map((program, i) => (
                    <button
                        key={i + program}
                        className={ActiveBtn === i ? styles.btnActive : styles.btnCategory}
                        onClick={() => {
                            setActiveBtn(i)
                            setFilterProgram(program)
                        }}
                    >
                        {program}
                    </button>
                ))
            )}
        </div>
    )
}

export default FilterProgram
