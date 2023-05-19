import { IPartners } from '../types'
import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'

export const fetchPartner = async (locale: string) => {
    const query = qs.stringify({
        fields: ['partner'],
        populate: {
            logo: {
                fields: ['url'],
            },
        },
        locale,
    })

    const res = await fetcher<IPartners>(`${routerApi.root}${routerApi.router.partners}?${query}`)

    return res?.data || []
}

export default fetchPartner
