import { useContext, useState } from 'react'
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
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import CourseListMedicine from '@/src/features/ToggleDirection/components/CourseListMedicine'
import { contentToggleStore } from '@/src/features/ToggleDirection/store/ToggleContent'
import { CourseName } from '@/src/api/fetchCoursesName/types'
import { DataContext } from '@/pages/courses'

const CourseMedicine = (): JSX.Element => {
    const { t } = useTranslation('common')
    const [isFilterMobile, setFilterMobile] = useState(false)
    const data = useContext(DataContext)!
    const dataMedicine = data.filter(course => course.typeCourse === 'Медицина')
    const { medicine } = contentToggleStore
    const { categoryMedicine } = filterCourseStore
    const allCategory = categoryMedicine === t('allCategory') || t(categoryMedicine) === t('allCategory')

    const category = [
        ...new Set(
            dataMedicine.reduce(
                (accumulator: Array<string>, currentValue) => {
                    return accumulator.concat(currentValue.categories.map(item => item.item))
                },
                [t('allCategory')],
            ),
        ),
    ]

    const program = (data: Array<CourseName>): Array<string> => {
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
                        [t('allPrograms')],
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
                    header={t('medicine')}
                    color={'#3D3BFF'}
                    imageUrl={img}
                />
            </MotionLayoutX>

            <div className={styles.courseInfo}>
                <div className={styles.filterCourses}>
                    <Search />

                    <button onClick={() => setFilterMobile(true)} className={styles.btnFilterMobile}>
                        {t('filter')}
                    </button>

                    <div className={styles.filterDesktop}>
                        <FilterProgram data={program(dataMedicine)} />

                        <FilterTraining />

                        <FilterDuration />
                    </div>

                    <div className={isFilterMobile ? styles.filterMobile : 'close'}>
                        <FilterProgram data={program(dataMedicine)} />

                        <FilterTraining />

                        <FilterDuration />

                        <button className={styles.btn} onClick={() => setFilterMobile(false)}>
                            {t('apply')}
                        </button>
                    </div>
                </div>

                <CourseListMedicine dataCourse={dataMedicine} dataProgram={program(dataMedicine)} />
            </div>
        </div>
    )
}

export default observer(CourseMedicine)
