import Image from 'next/image'
import styles from './styles.module.scss'

interface CardReviewsProps {
    img: string
    title: string
    description: string
}

const CardReviews = ({ img, title, description }: CardReviewsProps) => {
    return (
        <div className={styles.reviews}>
            <div className={styles.imageContainer}>
                <Image src={img} alt={'img'} width={210} height={301} />
            </div>

            <div className={styles.content}>
                <div className={styles.triangle} />
                <h3 className={styles.header}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default CardReviews
