import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import styles from './styles.module.scss'
import Accordion from '@/src/components/Accordion'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'
import { useTranslation } from 'next-i18next'

interface CourseListProps {
    type: 'Диетология' | 'Психология'
    categoryData: Array<string>
    courseData: Array<NormalizeCoursesData>
}

const CourseList = ({ categoryData, courseData, type }: CourseListProps): JSX.Element => {
    const { t } = useTranslation('common')
    const { categoryDietetics, categoryPsychology } = filterCourseStore
    const icon = type === 'Диетология' ? 'dietetics' : 'psychology'
    const filterCategory = type === 'Диетология' ? categoryDietetics : categoryPsychology
    const allCategory = filterCategory === t('allCategory') || t(filterCategory) === t('allCategory')

    const courseList = (category: string) => {
        return courseData.filter(course => course.categories.some(item => item.item === category))
    }

    const getCategory = (categoryFilter: string, data: Array<string>): Array<string> => {
        return data.filter(item => (allCategory ? item !== t('allCategory') : item === categoryFilter))
    }

    return (
        <>
            {getCategory(filterCategory, categoryData).map((item, index) => (
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
