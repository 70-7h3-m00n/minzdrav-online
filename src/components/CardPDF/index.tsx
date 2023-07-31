import Image from 'next/image'
import imgPdf from '@/public/images/description.png'
import Link from 'next/link'
import styles from './styles.module.scss'

interface CardPDFProps {
    link: string
    description: string
}

const CardPDF = ({ link, description }: CardPDFProps) => {
    return (
        <Link href={link} target={'_blank'} className={styles.card}>
            <div className={styles.wrapperImage}>
                <Image
                    src={imgPdf}
                    alt={'pdf'}
                    sizes='33vw'
                    priority
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div>

            <p className={styles.text}>{description}</p>
        </Link>
    )
}

export default CardPDF
