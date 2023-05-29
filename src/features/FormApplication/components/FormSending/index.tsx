'use client'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { emailExp, phoneExp } from '@/src/shared/regExp'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import classNames from 'classnames'

interface FormSending {
    name: string
    phone: string
    email: string
}

const FormSending = (): JSX.Element => {
    const { t } = useTranslation('form')
    const {
        control,
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

    const submit: SubmitHandler<FormSending> = data => {
        console.log(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label className={styles.label}>
                    <p className={styles.descrTextValid}>{errors.name?.message}</p>

                    <Controller
                        render={({ field }) => (
                            <input
                                {...field}
                                className={'name' in errors ? styles.valid : styles.input}
                                placeholder={errors.name?.message || t('name')!}
                            />
                        )}
                        rules={{
                            required: t('validName')!,
                            minLength: {
                                value: 2,
                                message: 'Минимальная длинна 2 символа',
                            },
                        }}
                        name={'name'}
                        control={control}
                    />
                </label>

                <div className={styles.flexBlock}>
                    <label className={classNames(styles.label, styles.inputWidth)}>
                        <p className={styles.descrTextValid}>{errors.phone?.message}</p>

                        <Controller
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className={'phone' in errors ? styles.valid : styles.input}
                                    placeholder={errors.phone?.message || t('phone')!}
                                />
                            )}
                            rules={{
                                required: t('validPhone')!,
                                pattern: {
                                    value: phoneExp,
                                    message: 'Телефон не соотвествует номерам телефона РФ',
                                },
                            }}
                            name={'phone'}
                            control={control}
                        />
                    </label>

                    <label className={classNames(styles.label, styles.inputWidth)}>
                        <p className={styles.descrTextValid}>{errors.email?.message}</p>

                        <Controller
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className={'email' in errors ? styles.valid : styles.input}
                                    placeholder={errors.email?.message || t('email')!}
                                />
                            )}
                            rules={{
                                required: t('validEmail')!,
                                pattern: {
                                    value: emailExp,
                                    message: 'email введен не коректно ',
                                },
                            }}
                            name={'email'}
                            control={control}
                        />
                    </label>
                </div>

                <div className={styles.wrapperSubmit}>
                    <p className={styles.text}>
                        {t('political-one')}
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
        </div>
    )
}

export default FormSending
