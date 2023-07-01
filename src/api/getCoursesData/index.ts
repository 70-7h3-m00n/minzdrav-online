import normalizeCoursesData from '@/src/api/getCoursesData/utils/normalizeCoursesData'
import fetchCourses from '@/src/api/getCoursesData/utils/fetchCourses'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'

export const getCoursesData = async (locale: string): Promise<NormalizeCoursesData[]> => {
    const coursesData = await fetchCourses(locale)

    return normalizeCoursesData({ coursesData })
}

export default getCoursesData
