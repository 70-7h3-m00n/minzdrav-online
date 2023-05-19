import { IResources } from '../types'
import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'

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
    const res = await fetcher<IResources>(`${routerApi.root}${routerApi.router.resource}?${query}`)

    return res?.data || []
}

export default fetchResources
