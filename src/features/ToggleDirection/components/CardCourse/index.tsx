import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from '@/public/images/imgCard.png'
import uuid from 'react-uuid'

interface CardCourseProps {
    color: string
    name: string
    category: { item: string }[]
    durationMonth: number
}

const CardCourse = ({ color, name, category, durationMonth }: CardCourseProps): JSX.Element => {
    const router = useRouter()

    return (
        <div className={styles.wrapperCard} style={{ background: color }}>
            <div className={styles.content}>
                <div className={styles.wrapperCategory}>
                    {category.map(item => (
                        <div key={uuid()} className={styles.category}>
                            {item.item}
                        </div>
                    ))}
                </div>

                <h3 className={styles.header}>{name}</h3>
            </div>

            <div className={styles.data}>{durationMonth} месяцев</div>

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
