import fetchPathsCourses from '@/src/api/getPathsCourses/utils/fetchPathsCourses'
import normalizePathsCoursesData from '@/src/api/getPathsCourses/utils/normalizePathsCoursesData'
import { NormalizePathsCoursesData } from '@/src/api/getPathsCourses/types'

export const getPathsCoursesData = async (locale: string): Promise<NormalizePathsCoursesData[]> => {
    const pathsCoursesData = await fetchPathsCourses(locale)

    return normalizePathsCoursesData({ pathsCoursesData })
}

export default getPathsCoursesData
