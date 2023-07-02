import normalizePathsCoursesData from '@/src/api/getPathsCourses/utils/normalizePathsCoursesData'

interface Attributes {
    pathCourse: string
}

interface Courses {
    id: number
    attributes: Attributes
}

interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

interface Meta {
    pagination: Pagination
}

export interface IPathsCourses {
    data: Courses[]
    meta: Meta
}

export interface NormalizePathsCoursesData {
    pathCourse: string
}
