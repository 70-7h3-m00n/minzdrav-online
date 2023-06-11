import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './style.module.scss'

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
                <button className={styles.btnActive}>{data[1]}</button>
            ) : (
                data.map((program, i) => (
                    <button
                        key={i + program}
                        className={ActiveBtn === i ? styles.btnActive : styles.btnCategory}
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
