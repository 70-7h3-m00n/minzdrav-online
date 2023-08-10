import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { emailExp, phoneExp } from '@/src/shared/regExp'
import { SubmitHandler, useForm } from 'react-hook-form'
import classNames from 'classnames'
import axios from 'axios'
import { routerFront } from '@/src/config/routerApi'
import useUtmData from '@/src/hooks/useUtmData'
import { useRouter } from 'next/router'
import Spiner from '@/src/features/FormApplication/components/Spiner'
import Answer from '@/src/features/FormApplication/components/Answer'
import { useState } from 'react'

interface FormSending {
    name: string
    phone: string
    email: string
}

const FormSending = (): JSX.Element => {
    const { t } = useTranslation('form')
    const [isOpen, setOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [status, setStatus] = useState(true)
    const [isForm, setForm] = useState(true)

    const { pathname } = useRouter()
    const utms = useUtmData()
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<FormSending>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        },
        mode: 'onTouched',
    })

    const submit: SubmitHandler<FormSending> = async data => {
        setLoading(true)
        setForm(false)

        try {
            const reason = await axios.post(`${routerFront.root}`, {
                ...data,
                utms,
            })
            if (reason.status >= 400) {
                setStatus(false)
            }
            setOpen(true)
            setLoading(false)
        } catch (e) {
            setStatus(false)
            setOpen(true)
            setLoading(false)
        }

        reset()
    }

    return (
        <div>
            <form className={isForm ? '' : 'close'} onSubmit={handleSubmit(submit)}>
                <label className={styles.label}>
                    <p className={styles.descrTextValid}>{errors.name?.message}</p>

                    <input
                        className={'name' in errors ? styles.valid : styles.input}
                        placeholder={errors.name?.message || t('name')!}
                        {...register('name', {
                            // required: t('validName')!,
                            minLength: {
                                value: 2,
                                message: 'Минимальная длинна 2 символа',
                            },
                        })}
                    />
                </label>

                <div className={styles.flexBlock}>
                    <label className={classNames(styles.label, styles.inputWidth)}>
                        <p className={styles.descrTextValid}>{errors.phone?.message}</p>

                        <input
                            className={'phone' in errors ? styles.valid : styles.input}
                            placeholder={errors.phone?.message || t('phone')!}
                            {...register('phone', {
                                required: t('validPhone')!,
                                pattern: {
                                    value: phoneExp,
                                    message: 'Телефон не соотвествует номерам телефона РФ',
                                },
                            })}
                        />
                    </label>

                    <label className={classNames(styles.label, styles.inputWidth)}>
                        <p className={styles.descrTextValid}>{errors.email?.message}</p>

                        <input
                            className={'email' in errors ? styles.valid : styles.input}
                            placeholder={errors.email?.message || t('email')!}
                            {...register('email', {
                                // required: t('validEmail')!,
                                pattern: {
                                    value: emailExp,
                                    message: 'email введен не коректно ',
                                },
                            })}
                        />
                    </label>
                </div>

                <div className={styles.wrapperSubmit}>
                    <p className={styles.text}>
                        {t('political-one')}&nbsp;
                        <Link href=''>{t('link-one')}</Link>
                        &nbsp;{t('and')}&nbsp;
                        <Link href=''>{t('link-two')}</Link>
                    </p>

                    <div>
                        <button disabled={!isValid} type='submit' className={!isValid ? styles.disabled : styles.btn}>
                            {t('submit')}
                        </button>
                    </div>
                </div>
            </form>

            <Spiner isLoading={isLoading} />

            <Answer isOpen={isOpen} status={status} />
        </div>
    )
}

export default observer(FormSending)
