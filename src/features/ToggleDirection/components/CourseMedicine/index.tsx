import { memo, useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import img from '@/public/images/MedicineCard.png'
import styles from './styles.module.scss'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import FilterCategory from '@/src/features/ToggleDirection/components/FilterCategory'
import getPartnersData from '@/src/api/getProgramData'
import FilterProgram from '@/src/features/ToggleDirection/components/FilterProgram'
import classNames from 'classnames'
import FilterTraining from '@/src/features/ToggleDirection/components/FilterTraining'
import Search from '@/src/features/ToggleDirection/components/Search/input'
import FilterDuration from '@/src/features/ToggleDirection/components/FilterDuration'
import MotionLayoutX from '@/src/components/MotionLayoutX'
import CoursesCardsList from '@/src/features/ToggleDirection/components/CoursesCardsList'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

interface CourseMedicineProps {
    dataMedicine: Awaited<ReturnType<typeof getPartnersData>>
}

const CourseMedicine = observer(({ dataMedicine }: CourseMedicineProps): JSX.Element => {
    const { medicine } = useContentToggle()
    const [searchCourse, setSearchCourse] = useState('')
    const [durationTraining, setDurationTraining] = useState(24)

    const category = (data: Awaited<ReturnType<typeof getPartnersData>>): string[] => {
        return [
            ...new Set(
                data.reduce((accumulator: Array<string>, currentValue) => {
                    return accumulator.concat(currentValue.categories.map(item => item.item))
                }, []),
            ),
        ]
    }
    const [categoryData, setCategoryData] = useState(category(dataMedicine))
    const [filterCategory, setFilterCategory] = useState(category(dataMedicine)[0])

    const program = useCallback(
        (data: Awaited<ReturnType<typeof getPartnersData>>): string[] => {
            return [
                ...new Set(
                    data
                        .filter(course => course.categories.some(item => item.item === filterCategory))
                        .reduce(
                            (accumulator: Array<string>, currentValue) => {
                                return accumulator.concat(currentValue.programs.map(item => item.item))
                            },
                            ['Все программы'],
                        ),
                ),
            ]
        },
        [filterCategory],
    )
    const [programData, setProgramData] = useState(program(dataMedicine))
    const [filterProgram, setFilterProgram] = useState(programData[0])

    const training = useCallback(
        (data: Awaited<ReturnType<typeof getPartnersData>>): string[] => {
            return [
                ...new Set(
                    data
                        .filter(course => course.categories.some(item => item.item === filterCategory))
                        .reduce(
                            (accumulator: Array<string>, currentValue) => {
                                return accumulator.concat(currentValue.typeTraining.map(item => item.item))
                            },
                            ['Любой'],
                        ),
                ),
            ]
        },
        [filterCategory],
    )
    const [trainingData, setTrainingData] = useState(training(dataMedicine))
    const [filterTraining, setFilterTraining] = useState(trainingData[0])

    useEffect(() => {
        setProgramData([...program(dataMedicine)])
        setCategoryData([...category(dataMedicine)])
        setTrainingData([...training(dataMedicine)])
    }, [dataMedicine, filterCategory, program, training])

    useEffect(() => {
        setFilterProgram('Все программы')
        setFilterTraining('Любой')
        setDurationTraining(24)
    }, [programData])

    const courseList = (programFilter: string): NormalizeProgramData[] => {
        return dataMedicine
            .filter(course => course.categories.some(item => item.item === filterCategory))
            .filter(program =>
                program.programs.some(item => (programFilter === 'Все программы' ? item : item.item === programFilter)),
            )
            .filter(courseName =>
                searchCourse === '' ? courseName : courseName.name.toLowerCase().includes(searchCourse),
            )
            .filter(training =>
                training.typeTraining.some(item => (filterTraining === 'Любой' ? item : item.item === filterTraining)),
            )
            .filter(duration => duration.durationTraining <= durationTraining)
    }

    return (
        <div className={medicine ? styles.infoBlock : 'close'}>
            <MotionLayoutX variant={'left'}>
                <FilterCategory
                    data={categoryData}
                    setFilterCategory={setFilterCategory}
                    header={'Медицина'}
                    color={'#3D3BFF'}
                    imageUrl={img}
                />
            </MotionLayoutX>

            <div className={styles.courseInfo}>
                <div className={styles.filterCourses}>
                    <Search setSearchCourse={setSearchCourse} />

                    <FilterProgram data={programData} setFilterProgram={setFilterProgram} />

                    <FilterTraining data={trainingData} setFilterTraining={setFilterTraining} />

                    <FilterDuration durationTraining={durationTraining} setDurationTraining={setDurationTraining} />
                </div>

                <div className={styles.coursesContent}>
                    <ul className={styles.listCategory}>
                        {programData
                            .filter(item => (filterProgram === 'Все программы' ? item : item === filterProgram))
                            .map((category, index) => {
                                if (category === 'Все программы') return null
                                return (
                                    <li
                                        key={index + 'category'}
                                        className={classNames(
                                            styles.category,
                                            courseList(category).length === 0 && 'close',
                                        )}
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
            </div>
        </div>
    )
})

export default memo(CourseMedicine, (prevProps, nextProps) => prevProps.dataMedicine !== nextProps.dataMedicine)
