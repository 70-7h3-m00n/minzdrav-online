import styles from './styles.module.scss'
import { Webinar } from '@/src/api/fetchWebinars/types'
import CardWebinar from '@/src/features/Webinars/components/CardWebinar'

interface Props {
    data: Array<Webinar> | undefined
}

const WebinarSchedule = ({ data }: Props) => {

    return (
        <div className={styles.webinarSchedule}>
            <h2 className={'header'}>График вебинаров</h2>

            <div className={styles.wrapperCardWebinars}>
                {data!.map((webinar, index) => (
                    <CardWebinar key={index} data={webinar} />
                ))}
            </div>
        </div>
    )
}

export default WebinarSchedule
