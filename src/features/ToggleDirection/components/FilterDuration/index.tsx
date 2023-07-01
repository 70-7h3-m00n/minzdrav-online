import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import Slider from '@mui/material/Slider'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'
import { useEffect, useState } from 'react'
import useDebounce from '@/src/hooks/useDebounce'
import { useRouter } from 'next/router'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'

const minDistance = 1

const FilterDuration = (): JSX.Element => {
    const { t } = useTranslation()
    const { replace, query, pathname } = useRouter()
    const { setFilterDuration } = filterCourseStore
    const { filterDuration } = filterCourseStore.filterCourse as { filterDuration: Array<number> }
    const [duration, setDuration] = useState(filterDuration)
    const [isQuery, setQuery] = useState(false)
    const debounce = useDebounce(duration, 500)
    const queryParams = getQueryData()

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            setDuration([Math.min(newValue[0], duration[1] - minDistance), duration[1]])
        } else {
            setDuration([duration[0], Math.max(newValue[1], duration[0] + minDistance)])
        }
        setQuery(true)
    }

    useEffect(() => {
        if (String(duration) !== query.filterDuration && isQuery) {
            replace(
                pathname,
                {
                    query: {
                        ...queryParams,
                        filterDuration: `${duration[0]},${duration[1]}`,
                    },
                },
                { scroll: false },
            )
        }
        setFilterDuration(duration)
    }, [debounce, isQuery])

    useEffect(() => {
        if (query.filterDuration !== undefined && typeof query.filterDuration === 'string') {
            const data = query.filterDuration.split(',').map(Number)
            setFilterDuration(data)
        }
    }, [query])

    return (
        <div className={styles.durationBlock}>
            <h2 className={styles.headerFilter}>{t('common:duration')}</h2>

            <label className={styles.durationLabel}>
                <div>{t('common:durationHeader')}</div>

                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    className={styles.durationRange}
                    value={duration}
                    min={1}
                    max={24}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    disableSwap
                />
            </label>
        </div>
    )
}

export default observer(FilterDuration)
