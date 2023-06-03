import React, { Dispatch, SetStateAction } from 'react'
import styles from './style.module.scss'
import SearchIcon from '@/src/components-svg/search'

interface SearchProps {
    setSearchCourse: Dispatch<SetStateAction<string>>
}

const Search = ({ setSearchCourse }: SearchProps): JSX.Element => {
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
