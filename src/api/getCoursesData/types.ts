interface ImageData {
    id: number
    attributes: {
        url: string
    }
}

interface SubInfoContent {
    id: number
    description: string
    image: {
        data: ImageData[]
    }
}

interface SubInfoText {
    id: number
    item: string
}

interface Program {
    id: number
    item: string
}

interface Category {
    id: number
    item: string
}

export interface Image {
    data: Datum[]
}

export interface Datum {
    id: number
    attributes: {
        url: string
    }
}

interface Attributes {
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    pathCourse: string
    categories: Category[]
    programs: Program[]
    typeTraining: { id: number; item: string }[]
    subInfoContent: SubInfoContent[]
    subInfoText: SubInfoText[]
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

export interface ICourses {
    data: Courses[]
    meta: Meta
}

export interface NormalizeCoursesData {
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Array<{ item: string }>
    programs: Array<{ item: string }>
    typeTraining: Array<{ item: string }>
    subInfoText: Array<{ item: string }>
    subInfoContent: Array<{ description: string; image: string }>
    pathCourse: string
}
