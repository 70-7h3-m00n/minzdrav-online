import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IResponse } from '@/src/api/fetchPartner/types'
import qs from 'qs'

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

    const res = await fetcherGet<IResponse>(`${routerApi.root}${routerApi.router.partners}?${query}`)

    return res?.data
}

export default fetchPartner
