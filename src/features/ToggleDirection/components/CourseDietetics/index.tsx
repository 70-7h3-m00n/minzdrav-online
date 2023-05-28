import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import styles from './styles.module.scss'
import FilterCourse from '@/src/features/ToggleDirection/components/FilterCourse'
import img from '@/public/images/DieteticsCard.png'
import Accordion from '@/src/components/Accordion'

const CourseDietetics = observer(() => {
    const { dietetics } = useContentToggle()

    return (
        <div className={dietetics ? styles.infoBlock : 'close'}>
            <FilterCourse header={'Диетология'} color={'#FF5E3B'} imageUrl={img} />

            <h2>Профессии (8)</h2>

            <div>
                <Accordion icon={'dietetics'} />
                <Accordion icon={'dietetics'} />
                <Accordion icon={'dietetics'} />
            </div>
        </div>
    )
})

export default CourseDietetics
