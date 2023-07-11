import React, { useState } from 'react'
import styles from './styles.module.scss'
import CardCourse from '@/src/features/ToggleDirection/components/CardCourse'
import { useTranslation } from 'next-i18next'
import { CourseName } from '@/src/api/fetchCoursesName/types'

interface CoursesCardsListProps {
    data: CourseName[]
}

const CoursesCardsList = ({ data }: CoursesCardsListProps): JSX.Element => {
    const { t } = useTranslation('common')
    const itemsToShow = 10
    const [counter, setCounter] = useState(itemsToShow)

    const addCardItem = () => {
        const max = data.length
        const newCount = counter + itemsToShow

        if (max - newCount >= 0) {
            return setCounter(newCount)
        }
        if (max - newCount < 0) {
            const countEnd = max - counter
            if (countEnd > 0) {
                setCounter(counter + countEnd)
            }
        }
    }

    const itemsShow = data.length - counter >= itemsToShow ? itemsToShow : data.length - counter
    const closeBtn = data.length - counter > 0 ? styles.btnShow : 'close'
    const counterShow = itemsShow >= 0 ? itemsShow : 0
    const counterCourse = data.length - counter >= 0 ? data.length - counter : 0
    const alert = !Boolean(data.length) ? 'close' : ''
    return (
        <>
            <div className={alert}>Курс не найден</div>
            <ul className={styles.courseList}>
                {data.slice(0, counter).map(course => (
                    <li key={course.name} className={styles.course}>
                        <CardCourse course={course} />
                    </li>
                ))}
            </ul>

            <button className={closeBtn} onClick={addCardItem}>
                {t('more')} {counterShow} {t('professionsFrom')} {counterCourse}
            </button>
        </>
    )
}

export default CoursesCardsList
