import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { Webinar } from '@/src/api/fetchWebinars/types'
import { useTranslation } from 'next-i18next'
import { filterWebinars } from '@/src/features/Webinars/store/FilterWebinars'

interface Props {
    data: Array<Webinar> | undefined
}

const FilterWebinars = ({ data }: Props) => {
    const { t } = useTranslation()

    const category = [
        ...new Set(
            data?.reduce(
                (accumulator: Array<string>, currentValue) => {
                    return accumulator.concat(currentValue.category)
                },
                ['allCategory'],
            ),
        ),
    ]

    return (
        <div className={styles.wrapperBlock}>
            <h2 className={'header'}>Вебинары</h2>
            <div className={styles.wrapperCategory}>
                {category.map((item, index) => (
                    <div
                        className={filterWebinars.filter !== item ? styles.btnCategory : styles.btnActive}
                        onClick={() => filterWebinars.setFilterWebinar(item)}
                        key={index}
                    >
                        {t(item)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default observer(FilterWebinars)
