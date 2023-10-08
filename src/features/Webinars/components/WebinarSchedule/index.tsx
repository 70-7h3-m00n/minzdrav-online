import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { Webinar } from '@/src/api/fetchWebinars/types'
import CardWebinar from '@/src/features/Webinars/components/CardWebinar'
import { filterWebinars } from '@/src/features/Webinars/store/FilterWebinars'

interface Props {
    data: Array<Webinar> | undefined
}

const WebinarSchedule = ({ data }: Props) => {

    const webinars = (): Array<Webinar> => {
        if (filterWebinars.filter !== 'allCategory') {
            return data?.filter(item => item.category === filterWebinars.filter)!
        } else {
            return data!
        }
    }

    return (
        <div className={styles.webinarSchedule}>
            <h2 className={'header'}>График вебинаров</h2>

            <div className={styles.wrapperCardWebinars}>
                {webinars().map((webinar, index) => (
                    <CardWebinar key={index} data={webinar} />
                ))}
            </div>
        </div>
    )
}

export default observer(WebinarSchedule)
