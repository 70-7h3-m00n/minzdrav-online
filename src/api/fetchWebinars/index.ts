import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IWebinarData, Webinar } from '@/src/api/fetchWebinars/types'

interface FetchWebinars {
    locale: string
    filter?: string
    timeFilter?: boolean
    timer?: number
}

export const fetchWebinars = async ({
    locale,
    filter = 'allCategory',
    timeFilter = true,
    timer = 0,
}: FetchWebinars): Promise<Webinar[] | []> => {
    const currentDate = new Date()
    const futureDate = new Date(timeFilter ? currentDate.getTime() + timer : currentDate.getTime() - timer)

    const startTime = timeFilter ? { $gt: futureDate.toISOString() } : { $lt: futureDate.toISOString() }
    const category = filter !== 'allCategory' ? { $eq: filter } : undefined

    const query = qs.stringify({
        filters: {
            startTime,
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
    return res !== null ? res.data : []
}

export default fetchWebinars
