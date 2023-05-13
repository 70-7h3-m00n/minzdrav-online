import React, { FormEvent, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { emailExp, phoneExp } from '@/src/shared/regExp'
import Input from '@/src/components/Input'
import axios from 'axios'

const FormApplication = () => {
    const refForm = useRef<HTMLFormElement | null>(null)
    const [disabled, setDisabled] = useState(true)
    const [textName, setTextName] = useState(false)
    const [textPhone, setTextPhone] = useState(false)
    const [textEmail, setTextEmail] = useState(false)
    const { t } = useTranslation('form')

    useEffect(() => {
        const validInput: boolean[] = [textName, textPhone, textEmail]
        if (validInput.includes(false)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [textName, textPhone, textEmail])

    const resetValid = () => {
        refForm.current?.reset()
        setDisabled(true)
        setTextName(false)
        setTextPhone(false)
        setTextEmail(false)
    }

    const validEmail = (test: string): boolean => {
        emailExp.test(test) ? setTextEmail(true) : setTextEmail(false)
        return emailExp.test(test)
    }

    const validPhone = (test: string): boolean => {
        phoneExp.test(test) ? setTextPhone(true) : setTextPhone(false)
        return phoneExp.test(test)
    }

    const validName = (text: string): boolean => {
        Boolean(text.trim()) && text.length >= 2 ? setTextName(true) : setTextName(false)
        return Boolean(text.trim()) && text.length >= 2
    }

    const submit = (event: FormEvent) => {
        event.preventDefault()
        setDisabled(false)
        try {
            axios
                .post('', {
                    data: Object.fromEntries(new FormData(refForm.current!)),
                })
                .then(() => {
                    resetValid()
                })
                .catch(e => {
                    console.log(e)
                    resetValid()
                })
        } catch (error) {
            console.log(error, 'error')
        }
    }

    return (
        <div className={styles.form}>
            <h2>{t('header-one')}</h2>

            <form ref={refForm} id={'formData'} onSubmit={event => submit(event)}>
                <Input
                    validator={validName}
                    name={'name'}
                    type={'text'}
                    placeholder={t('name')!}
                    validText={t('validName')}
                />

                <div className={styles.inputWrapper}>
                    <Input
                        validator={validPhone}
                        style={styles.input}
                        name={'phone'}
                        type={'number'}
                        placeholder={t('phone')!}
                        validText={t('validPhone')}
                    />

                    <Input
                        validator={validEmail}
                        style={styles.input}
                        name={'email'}
                        type={'email'}
                        placeholder={t('email')!}
                        validText={t('validEmail')}
                    />
                </div>
            </form>

            <div className={styles.wrapperSubmit}>
                <p className={styles.text}>
                    {t('political-one')}
                    <Link href={''}> {t('link-one')} </Link>
                    &nbsp;{t('and')}&nbsp;
                    <Link href={''}>{t('link-two')}</Link>
                </p>

                <div>
                    <button
                        disabled={disabled}
                        type={'submit'}
                        className={disabled ? styles.disabled : styles.btn}
                        onClick={e => submit(e)}
                    >
                        {t('submit')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormApplication
