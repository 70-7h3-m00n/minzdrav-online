import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { Reviews } from '@/src/api/fetchReviews/types'

export const fetchReviews = async (locale: string) => {
    const query = qs.stringify({
        fields: ['description', 'title'],
        populate: {
            image: {
                fields: ['url'],
            },
        },
        locale,
    })

    const res = await fetcherGet<Reviews>(`${routerApi.root}${routerApi.router.reviews}?${query}`)

    return res?.data || []
}
