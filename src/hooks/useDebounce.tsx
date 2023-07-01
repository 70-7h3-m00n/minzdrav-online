import { useEffect, useState } from 'react'

function useDebounce<T>(data: T, delay: number) {
    const [debouncedData, setDebouncedData] = useState(data)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedData(data)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [data, delay])

    return debouncedData
}

export default useDebounce
