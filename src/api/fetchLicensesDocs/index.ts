import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { LicensesDocs } from '@/src/api/fetchLicensesDocs/types'

export const fetchLicensesDocs = async (locale: string) => {
    const query = qs.stringify({
        fields: ['description'],
        populate: {
            document: {
                fields: ['url'],
            },
        },
        locale,
    })

    const res = await fetcherGet<LicensesDocs>(`${routerApi.root}${routerApi.router.licensesDocs}?${query}`)

    return res?.data || []
}
