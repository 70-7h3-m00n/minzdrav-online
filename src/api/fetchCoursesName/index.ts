import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { ICourseName } from '@/src/api/fetchCoursesName/types'

export const fetchCoursesName = async (locale: string) => {
    const query = qs.stringify({
        fields: ['name', 'typeCourse', 'color', 'durationTraining', 'pathCourse'],
        populate: {
            categories: {
                fields: ['item'],
            },
            programs: {
                fields: ['item'],
            },
            typeTraining: {
                fields: ['item'],
            },
            subInfoContent: {
                fields: ['description'],
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            },
            subInfoText: {
                fields: ['item'],
            },
        },
        locale,
    })

    const res = await fetcherGet<ICourseName>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data || []
}

export default fetchCoursesName
