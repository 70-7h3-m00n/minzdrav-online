import { IResources } from '../types'
import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerBack } from '@/src/config/routerBack'

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
    const res = await fetcher<IResources>(`${routerBack.root}${routerBack.router.resource}?${query}`)

    return res?.data || []
}

export default fetchResources
