import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface InterfaceButton {
    text: string
    style?: string
    link: string
    active?: boolean
}

const Button = ({ text, style, link, active = false }: InterfaceButton): JSX.Element => {
    const router = useRouter()
    return (
        <button
            onClick={() => {
                router.pathname !== link ? router.push(link) : null
            }}
            className={classNames([styles.button, active && styles.active, style])}
        >
            {text}
        </button>
    )
}

export default Button
