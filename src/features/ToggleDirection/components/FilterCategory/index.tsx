import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useRouter } from 'next/router'

interface FilterCourseProps {
    type: 'Диетология' | 'Психология' | 'Медицина'
    data: string[]
    imageUrl: StaticImageData
    color: string
    header: string
}

const FilterCategory = ({ data, imageUrl, color, header, type }: FilterCourseProps): JSX.Element => {
    const [activeBtn, setActiveBtn] = useState(0)
    const { locale } = useRouter()
    const { setCategoryDietetics, setCategoryPsychology, setCategoryMedicine, setFilterProgram, setFilterTraining } =
        filterCourseStore

    const setCategory = (category: string, index: number): void => {
        if (type === 'Диетология') {
            setCategoryDietetics(category)
        }
        if (type === 'Психология') {
            setCategoryPsychology(category)
        }
        if (type === 'Медицина') {
            setCategoryMedicine(category)
            setFilterProgram('')
            setFilterTraining('')
        }
        setActiveBtn(index)
    }

    useEffect(() => {
        if (data[0] === undefined) return
        if (type === 'Диетология') {
            setCategoryDietetics(data[0])
        }
        if (type === 'Психология') {
            setCategoryPsychology(data[0])
        }
        if (type === 'Медицина') {
            setCategoryMedicine(data[0])
        }
        setActiveBtn(0)
    }, [locale])

    return (
        <div className={styles.infoBlock} style={{ backgroundColor: color }}>
            <div className={styles.headerBlock}>
                <h2 className={styles.header}>{header}</h2>
                <div className={styles.wrapperBtn}>
                    {data.map((item, i) => (
                        <button
                            key={i + item}
                            className={activeBtn === i ? styles.active : styles.btn}
                            onClick={() => setCategory(item, i)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.wrapperImage}>
                <Image
                    src={imageUrl}
                    alt={'alt'}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                />
            </div>
        </div>
    )
}

export default observer(FilterCategory)
