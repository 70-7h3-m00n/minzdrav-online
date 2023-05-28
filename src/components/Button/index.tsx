import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface InterfaceButton {
    text: string
    style?: string
    link: string
}

const Button = ({ text, style, link }: InterfaceButton): JSX.Element => {
    const router = useRouter()
    return (
        <button onClick={() => router.push(link)} className={classNames([styles.button, style])}>
            {text}
        </button>
    )
}

export default Button
