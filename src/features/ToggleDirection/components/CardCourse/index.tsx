import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from '@/public/images/imgCard.png'
import { motion } from 'framer-motion'
import { animation } from '@/src/features/ToggleDirection/components/CardCourse/animation'

interface CardCourseProps {
    color: string
    pathCourse: string
    name: string
    durationTraining: number | string
    categories: Array<{ item: string }>
}

const CardCourse = ({ color, pathCourse, name, durationTraining, categories }: CardCourseProps): JSX.Element => {
    const router = useRouter()

    const handleClick = (slug: string) => {
        router.push(`/courses/${slug}`)
    }

    return (
        <>
            <motion.div
                className={styles.wrapperCard}
                style={{
                    background: color,
                    cursor: router.pathname === '/courses' ? 'pointer' : 'grabbing',
                }}
                variants={animation.cardCourse}
                initial={'hidden'}
                animate={'visible'}
                custom={0.8}
                onClick={() => (router.pathname === '/courses' ? handleClick(pathCourse) : null)}
            >
                <div className={styles.content}>
                    <div className={styles.wrapperCategory}>
                        {categories.map((item, index) => (
                            <div key={index} className={styles.category}>
                                {item.item}
                            </div>
                        ))}
                    </div>

                    <h3
                        className={styles.header}
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() => (router.pathname !== '/courses' ? handleClick(pathCourse) : null)}
                    >
                        {name}
                    </h3>
                </div>

                <div className={styles.data}>{durationTraining} месяцев</div>

                <div className={styles.wrapperImage}>
                    <Image
                        src={Card}
                        alt={'img'}
                        fill
                        loading={'lazy'}
                        sizes='(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw'
                    />
                </div>
            </motion.div>
        </>
    )
}

export default CardCourse
