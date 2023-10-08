import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IWebinarData } from '@/src/api/fetchWebinars/types'

export const fetchWebinars = async (locale: string) => {
    const query = qs.stringify({
        fields: ['slug', 'description', 'speaker', 'startTime', 'category'],
        populate: {
            image: {
                fields: ['url'],
            },
        },
        locale,
    })
    const res = await fetcherGet<IWebinarData>(`${routerApi.root}${routerApi.router.webinars}?${query}`)
    return res?.data || []
}

export default fetchWebinars
