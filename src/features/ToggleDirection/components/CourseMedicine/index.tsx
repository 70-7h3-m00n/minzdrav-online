import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import img from '@/public/images/MedicineCard.png'
import styles from './styles.module.scss'
import FilterCategory from '@/src/features/ToggleDirection/components/FilterCategory'
import FilterProgram from '@/src/features/ToggleDirection/components/FilterProgram'
import FilterTraining from '@/src/features/ToggleDirection/components/FilterTraining'
import Search from '@/src/features/ToggleDirection/components/Search/input'
import FilterDuration from '@/src/features/ToggleDirection/components/FilterDuration'
import MotionLayoutX from '@/src/components/MotionLayoutX'
import { useTranslation } from 'next-i18next'
import { DataContext } from '@/pages/directions'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import CourseListMedicine from '@/src/features/ToggleDirection/components/CourseListMedicine'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'
import { contentToggleStore } from '@/src/features/ToggleDirection/store/ToggleContent'

const CourseMedicine = (): JSX.Element => {
    const { t } = useTranslation()
    const data = useContext(DataContext)!
    const dataMedicine = data.filter(course => course.typeCourse === 'Медицина')
    const { medicine } = contentToggleStore
    const { categoryMedicine } = filterCourseStore

    const allCategory = categoryMedicine === t('common:allPrograms') || categoryMedicine === ''

    const category = [
        ...new Set(
            dataMedicine.reduce((accumulator: Array<string>, currentValue) => {
                return accumulator.concat(currentValue.categories.map(item => item.item))
            }, []),
        ),
    ]

    const program = (data: Array<NormalizeCoursesData>): Array<string> => {
        return [
            ...new Set(
                data
                    .filter(course =>
                        course.categories.some(item => (allCategory ? item.item : item.item === categoryMedicine)),
                    )
                    .reduce(
                        (accumulator: Array<string>, currentValue) => {
                            return accumulator.concat(currentValue.programs.map(item => item.item))
                        },
                        [t('common:allPrograms')],
                    ),
            ),
        ]
    }

    return (
        <div className={medicine ? styles.infoBlock : 'close'}>
            <MotionLayoutX variant={'left'}>
                <FilterCategory
                    type={'Медицина'}
                    data={category}
                    header={t('common:medicine')}
                    color={'#3D3BFF'}
                    imageUrl={img}
                />
            </MotionLayoutX>

            <div className={styles.courseInfo}>
                <div className={styles.filterCourses}>
                    <Search />

                    <FilterProgram data={program(dataMedicine)} />

                    <FilterTraining />

                    <FilterDuration />
                </div>

                <CourseListMedicine dataCourse={dataMedicine} dataProgram={program(dataMedicine)} />
            </div>
        </div>
    )
}

export default observer(CourseMedicine)
