import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerBack } from '@/src/config/routerBack'
import { ICourses } from '@/src/api/getCoursesData/types'

export const fetchCourses = async (locale: string) => {
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

    const res = await fetcher<ICourses>(`${routerBack.root}${routerBack.router.programs}?${query}`)

    return res?.data || []
}

export default fetchCourses
