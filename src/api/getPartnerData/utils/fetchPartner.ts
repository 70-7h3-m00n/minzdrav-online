import { IPartners } from '../types'
import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerBack } from '@/src/config/routerBack'

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

    const res = await fetcher<IPartners>(`${routerBack.root}${routerBack.router.partners}?${query}`)

    return res?.data || []
}

export default fetchPartner
