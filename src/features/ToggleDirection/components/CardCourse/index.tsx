import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from '@/public/images/imgCard.png'

interface CardCourseProps {
    color: string
    id?: number | string
    data?: any
}

const CardCourse = ({ color, id, data }: CardCourseProps): JSX.Element => {
    const router = useRouter()

    return (
        <div className={styles.wrapperCard} style={{ background: color }}>
            <div className={styles.content}>
                <div className={styles.wrapperCategory}>
                    <div className={styles.category}>Профессиональная переподготовка</div>
                </div>

                <h3 className={styles.header}>Авиционная и космическая медицина</h3>
            </div>

            <data className={styles.data}>9 месяцев</data>

            <div className={styles.wrapperImage}>
                <Image
                    src={Card}
                    alt={'img'}
                    fill
                    priority
                    sizes='(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw'
                />
            </div>
        </div>
    )
}

export default CardCourse
