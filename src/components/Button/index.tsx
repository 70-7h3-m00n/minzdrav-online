import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface InterfaceButton {
    text: string
    style?: string
}

const Button = ({ text, style }: InterfaceButton): JSX.Element => {
    return <button className={classNames([styles.button, style])}>{text}</button>
}

export default Button
