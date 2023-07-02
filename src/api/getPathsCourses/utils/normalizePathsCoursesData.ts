import { NormalizePathsCoursesData } from '@/src/api/getPathsCourses/types'
import fetchPathsCourses from '@/src/api/getPathsCourses/utils/fetchPathsCourses'

export const normalizePathsCoursesData = ({
    pathsCoursesData,
}: {
    pathsCoursesData: Awaited<ReturnType<typeof fetchPathsCourses>>
}): Array<NormalizePathsCoursesData> =>
    pathsCoursesData?.map(({ attributes }) => ({
        pathCourse: attributes.pathCourse,
    })) || []

export default normalizePathsCoursesData
