import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IWebinarData } from '@/src/api/fetchWebinars/types'

export const fetchWebinars = async (locale: string, filter: string = 'allCategory') => {
    const timeFilter = new Date()
    const category =
        filter !== 'allCategory'
            ? {
                  $eq: filter,
              }
            : undefined

    const query = qs.stringify({
        filters: {
            startTime: {
                $gt: timeFilter.toISOString(),
            },
            category,
        },
        sort: ['startTime'],
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
