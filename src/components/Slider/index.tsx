import React, { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import styles from './styles.module.scss'
import IconPrev from '@/src/components-svg/IconPrev'
import IconNext from '@/src/components-svg/IconNext'
import { SliderItems } from '@/src/components/Slider/type'

interface SliderProps<Render> {
    dataArray: any[]
    render: (props: Render, ref: React.ForwardedRef<HTMLDivElement>) => JSX.Element
}

const Slider = ({ dataArray, render }: SliderProps<SliderItems>): JSX.Element => {
    const $screenSlider = useRef<HTMLDivElement | null>(null)
    const $item = useRef<HTMLDivElement | null>(null)

    const [itemWidth, setItemWidth] = useState<number | null>(null)
    const [counterItemsScreen, setCounterItemsScreen] = useState<number | null>(null)
    const [translate, setTranslate] = useState(0)
    const [debounce, setDebounce] = useState(true)

    useEffect(() => {
        if ($item.current !== null && $screenSlider.current !== null) {
            const elemScreen = $screenSlider.current
            const elemItem = $item.current

            const slider = new ResizeObserver(entry => {
                const marginLeft = parseInt(window.getComputedStyle(elemItem).marginLeft)
                const marginRight = parseInt(window.getComputedStyle(elemItem).marginRight)

                const widthItem = $item.current?.offsetWidth! + (marginLeft + marginRight)
                const itemsScreen = Math.ceil(entry[0].contentRect.width / widthItem)

                setCounterItemsScreen(itemsScreen)
                setItemWidth(widthItem)
            })
            slider.observe(elemScreen)

            return () => slider.unobserve(elemScreen)
        }
    }, [counterItemsScreen, $item, itemWidth, dataArray.length])

    useEffect(() => {
        const hiddenHalfItem = (dataArray.length - counterItemsScreen!) / 2
        const roundingHalfItem = hiddenHalfItem < 1 ? 0 : hiddenHalfItem
        const andSliderLength = itemWidth! * (counterItemsScreen! + Math.ceil(roundingHalfItem))
        const isEven = (num: number) => (counterItemsScreen! % 2 ? Math.floor(num) : Math.ceil(num))
        const redirectItem = isEven((dataArray.length - counterItemsScreen!) / 2)

        const redirect = setTimeout(() => {
            if (translate === andSliderLength) {
                setTranslate(-itemWidth! * redirectItem)
            } else if (translate === -andSliderLength) {
                setTranslate(itemWidth! * redirectItem)
            }
            setDebounce(true)
        }, 300)

        return () => clearTimeout(redirect)
    }, [translate, counterItemsScreen, debounce, dataArray.length, itemWidth])

    const onNext = () => {
        setDebounce(false)
        setTranslate(translate => translate! + itemWidth!)
    }

    const onPrev = () => {
        setDebounce(false)
        setTranslate(translate! - itemWidth!)
    }

    const valid = dataArray.length >= counterItemsScreen! && $item.current !== null

    return (
        <div className={styles.wrapperSlider}>
            <div ref={$screenSlider} className={styles.slider}>
                <div
                    className={styles.sliderItem}
                    style={{
                        width: valid
                            ? `${itemWidth! * (dataArray.length + counterItemsScreen! * 2)}px`
                            : `${itemWidth! * dataArray.length}px`,
                        transform: dataArray.length >= counterItemsScreen! ? `translateX(${translate}px)` : 'none',
                        transition: !debounce ? 'transform 0.3s ease-out' : 'none',
                        visibility: itemWidth ? 'visible' : 'hidden',
                    }}
                >
                    {valid &&
                        dataArray
                            .slice(dataArray.length - counterItemsScreen!)
                            .map((item, i) => <React.Fragment key={uuid()}>{render(item, $item)}</React.Fragment>)}

                    {dataArray.map((item, i) => (
                        <React.Fragment key={uuid()}>{render(item, $item)}</React.Fragment>
                    ))}

                    {valid &&
                        dataArray
                            .slice(0, counterItemsScreen!)
                            .map((item, i) => <React.Fragment key={uuid()}>{render(item, $item)}</React.Fragment>)}
                </div>
            </div>

            <div className={styles.wrapperNavigation}>
                {valid && (
                    <>
                        <button
                            className={styles.btnSlider}
                            onClick={() => onNext()}
                            style={{
                                pointerEvents: debounce ? 'auto' : 'none',
                            }}
                        >
                            <IconNext />
                        </button>

                        <button
                            className={styles.btnSlider}
                            onClick={() => onPrev()}
                            style={{
                                pointerEvents: debounce ? 'auto' : 'none',
                            }}
                        >
                            <IconPrev />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Slider
