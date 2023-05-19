import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import useDebounce from '@/src/hooks/useDebounce'

interface InterfaceInput {
    name: string
    validator: (text: string) => boolean
    type: React.HTMLInputTypeAttribute | undefined
    validText: string
    placeholder?: string
    style?: string
}

const Input = ({ name, placeholder, validator, type, style, validText }: InterfaceInput) => {
    const [isValid, setIsValid] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsValid(validator(searchTerm))
        }
    }, [debouncedSearchTerm])

    return (
        <div className={classNames([style])}>
            <input
                name={name}
                className={isValid ? styles.input : styles.valid}
                type={type}
                placeholder={isValid ? placeholder : validText}
                onChange={e => setSearchTerm(e.target.value)}
                onBlur={() => setIsValid(validator(searchTerm))}
            />
        </div>
    )
}

export default Input
