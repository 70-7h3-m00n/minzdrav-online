import test1 from '@/public/images/dietetics.jpg'
import test2 from '@/public/images/medicine.jpg'
import test3 from '@/public/images/psychology.jpg'
import styles from '@/styles/pages-styles/Home.module.scss'
import { StaticImageData } from 'next/image'
import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'

interface DataCardDirection {
    text: string
    image: StaticImageData
    styles: string
    contentTab: EnumContentToggle
}

const DataCardDirection: Array<DataCardDirection> = [
    {
        text: 'common:medicine',
        image: test2,
        styles: styles.btnMedicine,
        contentTab: EnumContentToggle.medicine,
    },
    {
        text: 'common:psychology',
        image: test3,
        styles: styles.btnPsychology,
        contentTab: EnumContentToggle.psychology,
    },
    {
        text: 'common:dietetics',
        image: test1,
        styles: styles.btnDietetics,
        contentTab: EnumContentToggle.dietetics,
    },
]
export default DataCardDirection
