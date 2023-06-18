import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import styles from './styles.module.scss'
import FilterCategory from '@/src/features/ToggleDirection/components/FilterCategory'
import img from '@/public/images/PsychologyCard.png'
import Accordion from '@/src/components/Accordion'
import getPartnersData from '@/src/api/getProgramData'
import { useState } from 'react'
import MotionLayoutX from '@/src/components/MotionLayoutX'
import { useTranslation } from 'next-i18next'

interface CoursePsychologyProps {
    dataPsychology: Awaited<ReturnType<typeof getPartnersData>>
}

const CoursePsychology = observer(({ dataPsychology }: CoursePsychologyProps): JSX.Element => {
    const { t } = useTranslation()
    const { psychology } = useContentToggle()
    const category = dataPsychology.reduce((accumulator: Array<string>, currentValue) => {
        return accumulator.concat(currentValue.categories.map(item => item.item))
    }, [])
    const [filterCategory, setFilterCategory] = useState(category[0])

    const courseList = () => {
        return dataPsychology.filter(course => course.categories.some(item => item.item === filterCategory))
    }

    return (
        <div className={psychology ? styles.infoBlock : 'close'}>
            <MotionLayoutX variant={'left'}>
                <FilterCategory
                    data={category}
                    setFilterCategory={setFilterCategory}
                    header={t('common:psychology')}
                    color={'#A93BFF'}
                    imageUrl={img}
                />
            </MotionLayoutX>

            <h2 className={styles.header}>
                {filterCategory} ({courseList().length})
            </h2>

            <div>
                {courseList().map((course, index) => (
                    <Accordion data={course} key={index} icon={'psychology'} />
                ))}
            </div>
        </div>
    )
})

export default CoursePsychology
