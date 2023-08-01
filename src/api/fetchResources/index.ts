import fetcherGet from '@/src/helper/fetcher'
import qs from 'qs'
import { routerApi } from '@/src/config/routerApi'
import { IResponse } from '@/src/api/fetchResources/types'

export const fetchResources = async (locale: string) => {
    const query = qs.stringify({
        fields: ['description'],
        populate: {
            icon: {
                fields: ['url'],
            },
        },
        locale,
    })
    const res = await fetcherGet<IResponse>(`${routerApi.root}${routerApi.router.resource}?${query}`)

    return res?.data
}

export default fetchResources
