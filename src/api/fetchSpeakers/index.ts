import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { Speakers } from '@/src/api/fetchSpeakers/types'

export const fetchSpeakers = async (locale: string) => {
    const query = qs.stringify({
        fields: ['name, description'],
        populate: {
            image: {
                fields: ['url'],
            },
        },
        locale,
    })

    const res = await fetcherGet<Speakers>(`${routerApi.root}${routerApi.router.speakers}?${query}`)

    return res?.data || []
}
