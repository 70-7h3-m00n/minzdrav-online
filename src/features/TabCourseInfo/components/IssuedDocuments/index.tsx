import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import OpenImage from '@/src/components/OpenImage'

interface IssuedDocumentsProps {
    data: { description: string; image: Array<{ url: string }> }
    revers?: boolean
}

const IssuedDocuments = ({ data, revers = false }: IssuedDocumentsProps) => {
    return (
        <div
            className={styles.wrapper}
            style={{
                flexDirection: revers ? 'row-reverse' : 'row',
            }}
        >
            <OpenImage
                styleLayout={styles.image}
                src={data.image[0].url}
                alt={'image'}
                fill
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />

            <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                    __html: data.description,
                }}
            />
        </div>
    )
}

export default IssuedDocuments
