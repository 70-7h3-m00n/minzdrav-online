import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IRecommendedPrograms } from '@/src/api/fetchRecommendedPrograms/types'

const fetchRecommendedPrograms = async (locale: string, filter: Array<string>) => {
    if (filter.length === 0) {
        return []
    }

    const query = qs.stringify({
        filters: {
            name: {
                $in: filter,
            },
        },
        fields: ['name', 'typeCourse', 'color', 'durationTraining', 'pathCourse'],
        populate: {
            categories: {
                fields: ['item'],
            },
            programs: {
                fields: ['item'],
            },
        },
        locale,
    })

    const res = await fetcherGet<IRecommendedPrograms>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data || []
}

export default fetchRecommendedPrograms
