import { observer } from 'mobx-react-lite'
import img from '@/public/images/MedicineCard.png'
import styles from './styles.module.scss'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import FilterCourse from '@/src/features/ToggleDirection/components/FilterCourse'
import CardCourse from '@/src/features/ToggleDirection/components/CardCourse'
import classNames from 'classnames'

const CourseMedicine = observer(() => {
    const { medicine } = useContentToggle()

    return (
        <div className={medicine ? styles.infoBlock : 'close'}>
            <FilterCourse header={'Медицина'} color={'#3D3BFF'} imageUrl={img} />

            <div className={styles.courseInfo}>
                <div className={styles.filterCourses}>
                    <div className={styles.search}>
                        <div className={styles.searchImageWrapper}></div>

                        <input className={styles.searchInput} type={'text'} name={'search'} />
                    </div>

                    <div className={styles.toggleCategoryWrapper}>
                        <button className={classNames(styles.btnCategory, styles.btnActive)}>Все программы</button>

                        <button className={classNames(styles.btnCategory)}>Cестринское дело в терапии</button>
                    </div>

                    <div className={styles.typeTrainingWrapper}>
                        <h2 className={styles.headerFilter}>Тип обучения на платформе</h2>
                    </div>

                    <div className={styles.durationBlock}>
                        <h2 className={styles.headerFilter}>Длительность</h2>

                        <label className={styles.durationLabel}>
                            <div>От 1 до 24 месяцев</div>
                            <input className={styles.durationRange} type={'range'} />
                        </label>
                    </div>
                </div>

                <div className={styles.coursesContent}>
                    <ul className={styles.listCategory}>
                        <li className={styles.category}>
                            <h2 className={styles.header}>Сестринское дело в терапии ({'4'})</h2>

                            <ul className={styles.courseList}>
                                <li className={styles.course}>
                                    <CardCourse color={'#FFBE86'} />
                                </li>
                                <li className={styles.course}>
                                    <CardCourse color={'#FFBE86'} />
                                </li>
                                <li className={styles.course}>
                                    <CardCourse color={'#FFBE86'} />
                                </li>
                                <li className={styles.course}>
                                    <CardCourse color={'#FFBE86'} />
                                </li>
                            </ul>
                        </li>

                        <li className={styles.category}>
                            <h2 className={styles.header}>Сестринское дело в онкологии ({'1'})</h2>

                            <ul className={styles.courseList}>
                                <li className={styles.course}>
                                    <CardCourse color={'#FFBE86'} />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default CourseMedicine
