import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useEffect } from 'react'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'
import getFilterActions from '@/src/features/ToggleDirection/utils/getFilterActions'
import { useTranslation } from 'next-i18next'

interface FilterCourseProps {
    type: 'Диетология' | 'Психология' | 'Медицина'
    data: string[]
    imageUrl: StaticImageData
    color: string
    header: string
}

const FilterCategory = ({ data, imageUrl, color, header, type }: FilterCourseProps): JSX.Element => {
    const { t } = useTranslation()
    const { locale, replace, query, pathname } = useRouter()
    const { categoryMedicine, categoryPsychology, categoryDietetics } = filterCourseStore.filterCourse
    const queryParams = getQueryData()
    const { setCategoryDietetics, setCategoryPsychology, setCategoryMedicine, setFilterProgram, setFilterTraining } =
        getFilterActions()

    const activeBtn = (type: 'Диетология' | 'Психология' | 'Медицина') => {
        if (type === 'Медицина') {
            return categoryMedicine
        }
        if (type === 'Психология') {
            return categoryPsychology
        }
        if (type === 'Диетология') {
            return categoryDietetics
        }
    }

    const setQuery = (data: string, type: string) => {
        if (data !== query[type]) {
            replace(pathname, {
                query: {
                    ...queryParams,
                    [type]: data,
                },
            })
        }
    }

    const setCategory = (category: string) => {
        if (type === 'Диетология') {
            setCategoryDietetics(category)
            setQuery(category, 'categoryDietetics')
        }
        if (type === 'Психология') {
            setCategoryPsychology(category)
            setQuery(category, 'categoryPsychology')
        }
        if (type === 'Медицина') {
            setCategoryMedicine(category)
            setFilterProgram(t('common:typeTraining'))
            setFilterTraining('any')
            setQuery(category, 'categoryMedicine')
        }
    }

    useEffect(() => {
        if (data[0] === undefined) return
        if (type === 'Диетология') {
            setCategoryDietetics(data[0])
        }
        if (type === 'Психология') {
            setCategoryPsychology(data[0])
        }
        if (type === 'Медицина') {
            setCategoryMedicine(data[0])
        }
    }, [locale])

    useEffect(() => {
        if (query.categoryPsychology !== undefined && typeof query.categoryPsychology === 'string') {
            setCategoryPsychology(query.categoryPsychology)
        }
        if (query.categoryDietetics !== undefined && typeof query.categoryDietetics === 'string') {
            setCategoryDietetics(query.categoryDietetics)
        }
        if (query.categoryMedicine !== undefined && typeof query.categoryMedicine === 'string') {
            setCategoryMedicine(query.categoryMedicine)
        }
    }, [query])

    return (
        <div className={styles.infoBlock} style={{ backgroundColor: color }}>
            <div className={styles.headerBlock}>
                <h2 className={styles.header}>{header}</h2>
                <div className={styles.wrapperBtn}>
                    {data.map((item, i) => (
                        <button
                            key={i + item}
                            className={activeBtn(type) === item ? styles.active : styles.btn}
                            onClick={() => (activeBtn(type) !== item ? setCategory(item) : null)}
                        >
                            {item}
                        </button>
                    ))}
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
