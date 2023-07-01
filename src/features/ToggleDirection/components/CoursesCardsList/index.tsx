import React, { useState } from 'react'
import styles from './styles.module.scss'
import CardCourse from '@/src/features/ToggleDirection/components/CardCourse'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'

interface CoursesCardsListProps {
    data: NormalizeCoursesData[]
}

const CoursesCardsList = ({ data }: CoursesCardsListProps): JSX.Element => {
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
    return (
        <>
            <ul className={styles.courseList}>
                {data.slice(0, counter).map(course => (
                    <li key={course.name} className={styles.course}>
                        <CardCourse course={course} />
                    </li>
                ))}
            </ul>

            <button className={closeBtn} onClick={addCardItem}>
                Ещё {counterShow} профессий из {counterCourse}
            </button>
        </>
    )
}

export default CoursesCardsList
