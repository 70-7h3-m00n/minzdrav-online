import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { ICoursePath } from '@/src/api/fetchPathsCourses/types'

export const fetchPathsCourses = async (locale: string) => {
    const query = qs.stringify({
        fields: ['pathCourse'],
        locale,
    })

    const res = await fetcherGet<ICoursePath>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data || []
}

export default fetchPathsCourses
