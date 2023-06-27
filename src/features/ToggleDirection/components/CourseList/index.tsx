import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import styles from './styles.module.scss'
import Accordion from '@/src/components/Accordion'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

interface CourseListProps {
    type: 'Диетология' | 'Психология'
    category: Array<string>
    data: Array<NormalizeProgramData>
}

const CourseList = ({ category, data, type }: CourseListProps): JSX.Element => {
    const { categoryDietetics, categoryPsychology } = filterCourseStore.filterCourse
    const icon = type === 'Диетология' ? 'dietetics' : 'psychology'
    const filterCategory = type === 'Диетология' ? categoryDietetics : categoryPsychology

    const courseList = (category: string) => {
        return data.filter(course => course.categories.some(item => item.item === category))
    }

    const getCategory = (categoryFilter: string, data: Array<string>): Array<string> => {
        if (Boolean(categoryFilter)) {
            return data.filter(item => item === categoryFilter)
        }
        return data
    }

    return (
        <>
            {getCategory(filterCategory, category).map((item, index) => (
                <Fragment key={item + index}>
                    <h2 className={styles.header}>
                        {item} ({courseList(item).length})
                    </h2>

                    <div>
                        {courseList(item).map((course, index) => (
                            <Accordion data={course} key={index} icon={icon} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </>
    )
}

export default observer(CourseList)
