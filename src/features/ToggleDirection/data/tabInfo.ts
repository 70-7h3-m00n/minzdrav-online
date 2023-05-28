import DieteticsCard from '@/public/images/DieteticsCard.png'
import PsychologyCard from '@/public/images/PsychologyCard.png'
import MedicineCard from '@/public/images/MedicineCard.png'
import { StaticImageData } from 'next/image'
import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'

export type ArrayTabs = {
    header: string
    image: StaticImageData
    toggle: EnumContentToggle
    color: string
}

export const arrayTabs: Array<ArrayTabs> = [
    {
        header: 'Медицина',
        image: MedicineCard,
        toggle: EnumContentToggle.medicine,
        color: '#3d3bff',
    },
    {
        header: 'Психология ',
        image: PsychologyCard,
        toggle: EnumContentToggle.psychology,
        color: '#A93BFF',
    },
    {
        header: 'Диетология',
        image: DieteticsCard,
        toggle: EnumContentToggle.dietetics,
        color: '#FF5E3B',
    },
]
