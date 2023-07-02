import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerBack } from '@/src/config/routerBack'
import { IPathsCourses } from '@/src/api/getPathsCourses/types'

export const fetchPathsCourses = async (locale: string) => {
    const query = qs.stringify({
        fields: ['pathCourse'],
        locale,
    })

    const res = await fetcher<IPathsCourses>(`${routerBack.root}${routerBack.router.programs}?${query}`)

    return res?.data || []
}

export default fetchPathsCourses
