import uuid from 'react-uuid'
import styles from './styles.module.scss'
import { SliderItems } from '@/src/components/Slider/type'
import CardPartners from '@/src/components/CardPartners'

interface SliderProps<Render> {
    dataArray: { partner: string; iconUrl: string }[]
}

const Slider = ({ dataArray }: SliderProps<SliderItems>): JSX.Element => {

    return (
        <div className={styles.wrapperSlider}>
            <div className={styles.slider}>
                <div className={styles.sliderItem}>
                    {dataArray.map(item => (
                        <CardPartners key={uuid()} partner={item.partner} iconUrl={item.iconUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
