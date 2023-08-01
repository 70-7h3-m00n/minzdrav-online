import Image, { ImageProps } from 'next/image'
import Modal from '@/src/components/Modal'
import { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface OpenImage extends ImageProps {
    styleLayout?: string
}

const OpenImage = ({ styleLayout, src, alt, ...props }: OpenImage) => {
    const [isOpenImage, setOpenImage] = useState(false)

    return (
        <div>
            <div className={classNames(styleLayout, styles.image)} onClick={() => setOpenImage(true)}>
                <Image src={src} alt={alt} {...props} />
            </div>

            <Modal open={isOpenImage} setHidden={setOpenImage}>
                <img className={styles.modalImage} src={src.toString()} alt={alt} loading={'lazy'} />
            </Modal>
        </div>
    )
}

export default OpenImage
