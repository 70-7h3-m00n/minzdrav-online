import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IWebinarPathsData } from '@/src/api/fetchPathsWebinar/types'

export const fetchPathsWebinar = async (locale: string) => {
    const query = qs.stringify({
        fields: ['slug'],
        locale,
    })
    const res = await fetcherGet<IWebinarPathsData>(`${routerApi.root}${routerApi.router.webinars}?${query}`)
    return res?.data
}

export default fetchPathsWebinar
