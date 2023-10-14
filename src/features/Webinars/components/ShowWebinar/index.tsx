import styles from './styles.module.scss'
import { Webinar } from '@/src/api/fetchWebinars/types'
import CardWebinar from '@/src/features/Webinars/components/CardWebinar'

interface Props {
    data: Array<Webinar> | undefined
    header: string
}

const ShowWebinar = ({ data, header }: Props) => {
    return (
        <div className={styles.webinarSchedule}>
            <h2 className={'header'}>{header}</h2>

            <div className={styles.wrapperCardWebinars}>
                {data!.map((webinar, index) => (
                    <CardWebinar key={index} data={webinar} />
                ))}
            </div>
        </div>
    )
}

export default ShowWebinar
