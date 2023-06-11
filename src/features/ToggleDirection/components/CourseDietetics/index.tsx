import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import styles from './styles.module.scss'
import FilterCategory from '@/src/features/ToggleDirection/components/FilterCategory'
import img from '@/public/images/DieteticsCard.png'
import Accordion from '@/src/components/Accordion'
import getPartnersData from '@/src/api/getProgramData'
import { useState } from 'react'
import MotionLayoutX from '@/src/components/MotionLayoutX'

interface CourseDieteticsProps {
    dataDietetics: Awaited<ReturnType<typeof getPartnersData>>
}

const CourseDietetics = observer(({ dataDietetics }: CourseDieteticsProps): JSX.Element => {
    const { dietetics } = useContentToggle()
    const category = dataDietetics.reduce((accumulator: Array<string>, currentValue) => {
        return accumulator.concat(currentValue.categories.map(item => item.item))
    }, [])
    const [filterCategory, setFilterCategory] = useState(category[0])

    const courseList = () => {
        return dataDietetics.filter(course => course.categories.some(item => item.item === filterCategory))
    }

    return (
        <div className={dietetics ? styles.infoBlock : 'close'}>
            <MotionLayoutX variant={'left'}>
                <FilterCategory
                    data={category}
                    setFilterCategory={setFilterCategory}
                    header={'Диетология'}
                    color={'#FF5E3B'}
                    imageUrl={img}
                />
            </MotionLayoutX>

            <h2 className={styles.header}>
                {filterCategory} ({courseList().length})
            </h2>

            <div>
                {courseList().map((course, index) => (
                    <Accordion data={course} key={index} icon={'dietetics'} />
                ))}
            </div>
        </div>
    )
})

export default CourseDietetics
