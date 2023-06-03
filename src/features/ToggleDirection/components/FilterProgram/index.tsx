import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './style.module.scss'
import uuid from 'react-uuid'
import classNames from 'classnames'

interface FilterProgramProps {
    data: string[]
    setFilterProgram: Dispatch<SetStateAction<string>>
}

const FilterProgram = ({ data, setFilterProgram }: FilterProgramProps): JSX.Element => {
    const [ActiveBtn, setActiveBtn] = useState(0)

    useEffect(() => {
        setActiveBtn(0)
    }, [data])

    if (data === undefined) return <></>
    return (
        <div className={styles.toggleCategoryWrapper}>
            {data.length === 2 ? (
                <button key={uuid()} className={classNames(styles.btnCategory, styles.btnActive)}>
                    {data[1]}
                </button>
            ) : (
                data.map((program, i) => (
                    <button
                        key={uuid()}
                        className={classNames(styles.btnCategory, ActiveBtn === i && styles.btnActive)}
                        onClick={() => {
                            setActiveBtn(i)
                            setFilterProgram(program)
                        }}
                    >
                        {program}
                    </button>
                ))
            )}
        </div>
    )
}

export default FilterProgram
