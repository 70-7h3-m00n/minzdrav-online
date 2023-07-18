import React, { useEffect, useState } from 'react'
import getTimer from '@/src/helper/timer/getTimer'

interface TimerProps {
    discountData: Array<number>
}

const Timer = ({ discountData }: TimerProps) => {
    const [timer, setTimer] = useState(getTimer(discountData))

    function getTimeRemaining(timer: number) {
        const t = timer,
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24)

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(getTimer(discountData))
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [discountData, timer])

    return (
        <>
            {getTimeRemaining(timer).days}:{getTimeRemaining(timer).hours}:{getTimeRemaining(timer).minutes}:
            {getTimeRemaining(timer).seconds}
        </>
    )
}

export default Timer
