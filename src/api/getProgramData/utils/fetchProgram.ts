import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IPrograms } from '@/src/api/getProgramData/types'

export const fetchProgram = async (locale: string) => {
    const query = qs.stringify({
        fields: ['name', 'slug', 'typeCourse', 'color', 'durationTraining'],
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

    const res = await fetcher<IPrograms>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data || []
}

export default fetchProgram
