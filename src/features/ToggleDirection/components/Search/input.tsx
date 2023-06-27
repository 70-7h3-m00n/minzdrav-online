import styles from './style.module.scss'
import SearchIcon from '@/src/components-svg/search'
import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

const Search = (): JSX.Element => {
    const { setSearchCourse } = filterCourseStore

    return (
        <div className={styles.search}>
            <div className={styles.searchImageWrapper}>
                <SearchIcon />
            </div>

            <input
                onChange={e => setSearchCourse(e.target.value)}
                className={styles.searchInput}
                type={'text'}
                name={'search'}
            />
        </div>
    )
}

export default Search
