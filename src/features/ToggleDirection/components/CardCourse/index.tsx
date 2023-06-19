import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from '@/public/images/imgCard.png'
import { motion } from 'framer-motion'
import { animation } from '@/src/features/ToggleDirection/components/CardCourse/animation'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

interface CardCourseProps {
    course: NormalizeProgramData
}

const CardCourse = ({ course }: CardCourseProps): JSX.Element => {
    const router = useRouter()

    const handleClick = (slug: string) => {
        router.push(`/course/${slug}`)
    }

    return (
        <>
            <motion.div
                className={styles.wrapperCard}
                style={{ background: course.color }}
                variants={animation.cardCourse}
                initial={'hidden'}
                animate={'visible'}
                custom={0.8}
                onClick={() => handleClick(course.pathCourse)}
            >
                <div className={styles.content}>
                    <div className={styles.wrapperCategory}>
                        {course.categories.map((item, index) => (
                            <div key={index} className={styles.category}>
                                {item.item}
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.header}>{course.name}</h3>
                </div>

                <div className={styles.data}>{course.durationTraining} месяцев</div>

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
