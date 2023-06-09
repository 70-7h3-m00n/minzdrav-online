import uuid from 'react-uuid'
import styles from './styles.module.scss'
import { SliderItems } from '@/src/components/Slider/type'
import CardPartners from '@/src/components/CardPartners'
import React, { useRef, useState } from 'react'

interface SliderProps<Render> {
    dataArray: { partner: string; iconUrl: string }[]
}

const Slider = ({ dataArray }: SliderProps<SliderItems>): JSX.Element => {
    const blockRef = useRef<HTMLDivElement | null>(null)
    const [startX, setStartX] = useState<number | null>(null)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const elem = blockRef.current!
        setStartX(event.pageX - elem.offsetLeft)
        setScrollLeft(elem.scrollLeft)
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const elem = blockRef.current!
        if (!startX) return
        event.preventDefault()
        const x = event.pageX - elem.offsetLeft
        const walk = x - startX
        elem.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
        setStartX(null)
    }

    return (
        <div className={styles.wrapperSlider}>
            <div className={styles.slider}>
                <div
                    className={styles.sliderItem}
                    ref={blockRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {dataArray.map(item => (
                        <CardPartners key={uuid()} partner={item.partner} iconUrl={item.iconUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
