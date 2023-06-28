import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import classNames from 'classnames'
import CoursesCardsList from '@/src/features/ToggleDirection/components/CoursesCardsList'
import { useTranslation } from 'next-i18next'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

interface CourseListMedicineProps {
    dataProgram: Array<string>
    dataCourse: Array<NormalizeProgramData>
}

const CourseListMedicine = ({ dataProgram, dataCourse }: CourseListMedicineProps): JSX.Element => {
    const { t } = useTranslation()
    const { categoryMedicine, filterProgram, filterTraining, filterDuration, searchCourse } =
        filterCourseStore.filterCourse

    const allProgram = filterProgram === t('common:allPrograms') || filterProgram === ''
    const allCategory = categoryMedicine === ''
    const allTraining = filterTraining === 'any' || filterTraining === ''

    const courseList = (programFilter: string): Array<NormalizeProgramData> => {
        return dataCourse
            .filter(course =>
                course.categories.some(item => (allCategory ? item.item : item.item === categoryMedicine)),
            )
            .filter(program => program.programs.some(item => item.item === programFilter))
            .filter(courseName =>
                searchCourse === '' ? courseName : courseName.name.toLowerCase().includes(searchCourse),
            )
            .filter(training => training.typeTraining.some(item => (allTraining ? item : item.item === filterTraining)))
            .filter(
                duration =>
                    duration.durationTraining >= filterDuration[0] && duration.durationTraining <= filterDuration[1],
            )
    }

    return (
        <div className={styles.coursesContent}>
            <ul className={styles.listCategory}>
                {dataProgram
                    .filter(item => (allProgram ? item : item === filterProgram))
                    .map((category, index) => {
                        if (category === t('common:allPrograms')) return null
                        return (
                            <li
                                key={index + 'category'}
                                className={classNames(styles.category, courseList(category).length === 0 && 'close')}
                            >
                                <h2 className={styles.header}>
                                    {category} ({courseList(category).length})
                                </h2>

                                <CoursesCardsList data={courseList(category)} />
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default observer(CourseListMedicine)
