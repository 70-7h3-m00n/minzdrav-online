import styles from './styles.module.scss'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import uuid from 'react-uuid'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { animation } from '@/src/features/ToggleDirection/components/FilterCategory/animation'

interface FilterCourseProps {
    data: string[]
    imageUrl: StaticImageData
    color: string
    header: string
    setFilterCategory: Dispatch<SetStateAction<string>>
}

const FilterCategory = ({ data, imageUrl, color, header, setFilterCategory }: FilterCourseProps): JSX.Element => {
    const [ActiveBtn, setActiveBtn] = useState(0)

    useEffect(() => {
        setActiveBtn(0)
    }, [data])

    return (
        <div className={styles.infoBlock} style={{ backgroundColor: color }}>
            <div className={styles.headerBlock}>
                <h2 className={styles.header}>{header}</h2>
                <div className={styles.wrapperBtn}>
                    {data?.map((item, i) => (
                        <motion.button
                            variants={animation.buttonHover}
                            whileHover='hover'
                            key={uuid()}
                            className={classNames(styles.btn, ActiveBtn === i && styles.active)}
                            onClick={() => {
                                setFilterCategory(item)
                                setActiveBtn(i)
                            }}
                        >
                            {item}
                        </motion.button>
                    ))}
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

export default FilterCategory
