import styles from './styles.module.scss'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'

interface FilterCourseProps {
    data?: any
    imageUrl: StaticImageData
    color: string
    header: string
}

const FilterCourse = ({ data, imageUrl, color, header }: FilterCourseProps): JSX.Element => {
    return (
        <div className={styles.infoBlock} style={{ backgroundColor: color }}>
            <div className={styles.headerBlock}>
                <h2 className={styles.header}>{header}</h2>
                <div className={styles.wrapperBtn}>
                    <button className={styles.btn}>Средний медперсонал</button>
                    <button className={styles.btn}>Средний медперсонал</button>
                    <button className={styles.btn}>Управление в медицине</button>
                    <button className={classNames(styles.btn, styles.active)}>Баллы НМО</button>
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

export default FilterCourse
