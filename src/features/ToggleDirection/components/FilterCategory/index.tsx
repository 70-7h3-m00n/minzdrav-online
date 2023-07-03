import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useEffect } from 'react'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'
import { useTranslation } from 'next-i18next'

interface FilterCourseProps {
    type: 'Диетология' | 'Психология' | 'Медицина'
    data: string[]
    imageUrl: StaticImageData
    color: string
    header: string
}

const FilterCategory = ({ data, imageUrl, color, header, type }: FilterCourseProps): JSX.Element => {
    const { t } = useTranslation('common')
    const { locale, replace, query, pathname } = useRouter()
    const filterStore = filterCourseStore
    const queryParams = getQueryData()

    const getFilterCategory = (type: 'Диетология' | 'Психология' | 'Медицина') => {
        if (type === 'Медицина') {
            return filterStore.categoryMedicine
        }
        if (type === 'Психология') {
            return filterStore.categoryPsychology
        }
        if (type === 'Диетология') {
            return filterStore.categoryDietetics
        }
    }

    const setQuery = (data: string, type: string) => {
        if (data !== query[type]) {
            replace(
                pathname,
                {
                    query: {
                        ...queryParams,
                        [type]: data,
                    },
                },
                { scroll: false },
            )
        }
    }

    const setCategory = (category: string) => {
        if (type === 'Диетология') {
            filterStore.setCategoryDietetics(category)
            setQuery(category, 'categoryDietetics')
        }
        if (type === 'Психология') {
            filterStore.setCategoryPsychology(category)
            setQuery(category, 'categoryPsychology')
        }
        if (type === 'Медицина') {
            filterStore.setCategoryMedicine(category)
            filterStore.setFilterProgram('allPrograms')
            filterStore.setFilterTraining('any')
            setQuery(category, 'categoryMedicine')
        }
    }

    const isActiveBtn = (category: string) => {
        if (getFilterCategory(type) === category) {
            return true
        }
        return t(getFilterCategory(type)!) === category
    }

    useEffect(() => {
        if (data[0] === undefined) return
        if (type === 'Диетология') {
            filterStore.setCategoryDietetics('allCategory')
        }
        if (type === 'Психология') {
            filterStore.setCategoryPsychology('allCategory')
        }
        if (type === 'Медицина') {
            filterStore.setCategoryMedicine('allCategory')
        }
    }, [locale])

    useEffect(() => {
        if (query.categoryPsychology !== undefined && typeof query.categoryPsychology === 'string') {
            filterStore.setCategoryPsychology(query.categoryPsychology)
        }
        if (query.categoryDietetics !== undefined && typeof query.categoryDietetics === 'string') {
            filterStore.setCategoryDietetics(query.categoryDietetics)
        }
        if (query.categoryMedicine !== undefined && typeof query.categoryMedicine === 'string') {
            filterStore.setCategoryMedicine(query.categoryMedicine)
        }
    }, [query])

    return (
        <div className={styles.infoBlock} style={{ backgroundColor: color }}>
            <div className={styles.headerBlock}>
                <h2 className={styles.header}>{header}</h2>
                <div className={data.length === 0 ? 'close' : ''}>
                    <div className={data.length === 2 ? styles.wrapperBtn : 'close'}>
                        <button className={styles.active}>{data[1]}</button>
                    </div>

                    <div className={data.length > 2 ? styles.wrapperBtn : 'close'}>
                        {data.map((item, i) => (
                            <button
                                key={i + item}
                                className={isActiveBtn(item) ? styles.active : styles.btn}
                                onClick={() => (getFilterCategory(type) !== item ? setCategory(item) : null)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.wrapperImage}>
                <Image
                    src={imageUrl}
                    alt={'alt'}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority
                />
            </div>
        </div>
    )
}

export default observer(FilterCategory)
