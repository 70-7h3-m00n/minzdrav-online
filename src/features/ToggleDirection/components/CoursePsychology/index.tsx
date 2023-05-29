import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import styles from './styles.module.scss'
import FilterCourse from '@/src/features/ToggleDirection/components/FilterCourse'
import img from '@/public/images/PsychologyCard.png'
import Accordion from '@/src/components/Accordion'

const CoursePsychology = observer(() => {
    const { psychology } = useContentToggle()

    return (
        <div className={psychology ? styles.infoBlock : 'close'}>
            <FilterCourse header={'Психология '} color={'#A93BFF'} imageUrl={img} />

            <h2>Профессии (8)</h2>

            <div>
                <Accordion icon={'psychology'} />
                <Accordion icon={'psychology'} />
                <Accordion icon={'psychology'} />
            </div>
        </div>
    )
})

export default CoursePsychology
