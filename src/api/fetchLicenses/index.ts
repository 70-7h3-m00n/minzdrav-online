import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { Licenses } from '@/src/api/fetchLicenses/types'

export const fetchLicenses = async (locale: string) => {
    const query = qs.stringify({
        fields: ['description'],
        populate: {
            image: {
                fields: ['url'],
            },
        },
        locale,
    })

    const res = await fetcherGet<Licenses>(`${routerApi.root}${routerApi.router.licenses}?${query}`)

    return res?.data || []
}
