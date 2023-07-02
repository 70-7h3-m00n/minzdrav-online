import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import FilterCategory from '@/src/features/ToggleDirection/components/FilterCategory'
import { useContext } from 'react'
import MotionLayoutX from '@/src/components/MotionLayoutX'
import { DataContext } from '@/pages/directions'
import CourseList from '@/src/features/ToggleDirection/components/CourseList'
import { StaticImageData } from 'next/image'
import { contentToggleStore } from '@/src/features/ToggleDirection/store/ToggleContent'

interface CourseDieteticsProps {
    type: 'Диетология' | 'Психология'
    color: string
    header: string
    image: StaticImageData
}

const CourseContent = observer(({ type, header, image, color }: CourseDieteticsProps): JSX.Element => {
    const data = useContext(DataContext)!
    const dataDietetics = data.filter(course => course.typeCourse === type)
    const { dietetics, psychology } = contentToggleStore

    const toggleContent = type === 'Диетология' ? dietetics : psychology

    const category = [
        ...new Set(
            dataDietetics.reduce((accumulator: Array<string>, currentValue) => {
                return accumulator.concat(currentValue.categories.map(item => item.item))
            }, []),
        ),
    ]

    return (
        <div className={toggleContent ? styles.infoBlock : 'close'}>
            <MotionLayoutX variant={'left'}>
                <FilterCategory type={type} data={category} header={header} color={color} imageUrl={image} />
            </MotionLayoutX>

            <CourseList category={category} data={dataDietetics} type={type} />
        </div>
    )
})

export default CourseContent
