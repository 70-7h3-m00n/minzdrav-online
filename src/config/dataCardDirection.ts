import test1 from '@/public/images/dietetics.png'
import test2 from '@/public/images/medicine.png'
import test3 from '@/public/images/psychology.png'
import styles from '@/styles/pages-styles/Home.module.scss'
import { StaticImageData } from 'next/image'

interface DataCardDirection {
    text: string
    image: StaticImageData
    styles: string
    link: string
}

const DataCardDirection: Array<DataCardDirection> = [
    {
        text: 'common:medicine',
        image: test2,
        styles: styles.btnMedicine,
        link: '/',
    },
    {
        text: 'common:psychology',
        image: test3,
        styles: styles.btnPsychology,
        link: '/',
    },
    {
        text: 'common:dietetics',
        image: test1,
        styles: styles.btnDietetics,
        link: '/',
    },
]
export default DataCardDirection
