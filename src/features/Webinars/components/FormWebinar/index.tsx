import styles from './styles.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { emailExp, phoneExp } from '@/src/shared/regExp'
import Link from 'next/link'
import { routerFront } from '@/src/config/routerApi'
import axios from 'axios'

interface FormSending {
    phone: string
    email: string
}

const FormWebinar = () => {
    const { t } = useTranslation('form')
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<FormSending>({
        defaultValues: {
            phone: '',
            email: '',
        },
        mode: 'onTouched',
    })

    const submit: SubmitHandler<FormSending> = async data => {
        try {
            await axios.post(`${routerFront.webinar}`, {
                ...data,
            })
        } catch (e) {
            console.log(e)
        }

        reset()
    }

    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.header}>Участие бесплатное</h3>

            <form onSubmit={handleSubmit(submit)}>
                <label className={styles.label}>
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

                <label className={styles.label}>
                    <p className={styles.descrTextValid}>{errors.email?.message}</p>

                    <input
                        className={'email' in errors ? styles.valid : styles.input}
                        placeholder={errors.email?.message || t('email')!}
                        {...register('email', {
                            required: t('validEmail')!,
                            pattern: {
                                value: emailExp,
                                message: 'email введен не коректно ',
                            },
                        })}
                    />
                </label>

                <button disabled={!isValid} type='submit' className={!isValid ? styles.disabled : styles.btn}>
                    Зарегистрироваться бесплатно
                </button>
            </form>

            <p className={styles.textPersonalData}>
                {t('political-one')}&nbsp;
                <Link href=''>{t('link-one')}</Link>
                &nbsp;{t('and')}&nbsp;
                <Link href=''>{t('link-two')}</Link>
            </p>
        </div>
    )
}

export default FormWebinar
