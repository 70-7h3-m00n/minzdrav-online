import axios from 'axios'

export const fetcher = async <T>(url: string) => {
    try {
        const res = await axios.get<T>(url)
        return await res.data
    } catch (err) {
        console.error(err)
        return null
    }
}

export default fetcher
