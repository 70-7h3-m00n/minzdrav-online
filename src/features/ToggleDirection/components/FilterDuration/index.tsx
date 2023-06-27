import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import Slider from '@mui/material/Slider'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

const minDistance = 1

const FilterDuration = (): JSX.Element => {
    const { filterDuration } = filterCourseStore.filterCourse
    const { setFilterDuration } = filterCourseStore
    const { t } = useTranslation()

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            setFilterDuration([Math.min(newValue[0], filterDuration[1] - minDistance), filterDuration[1]])
        } else {
            setFilterDuration([filterDuration[0], Math.max(newValue[1], filterDuration[0] + minDistance)])
        }
    }

    return (
        <div className={styles.durationBlock}>
            <h2 className={styles.headerFilter}>{t('common:duration')}</h2>

            <label className={styles.durationLabel}>
                <div>{t('common:durationHeader')}</div>

                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    className={styles.durationRange}
                    value={filterDuration}
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
