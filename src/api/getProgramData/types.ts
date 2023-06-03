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

interface Attributes {
    name: string
    slug: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Category[]
    programs: Program[]
    typeTraining: { id: number; item: string }[]
    subInfoContent: SubInfoContent[]
    subInfoText: SubInfoText[]
}

interface DataItem {
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

export interface IPrograms {
    data: DataItem[]
    meta: Meta
}

export interface NormalizeProgramData {
    name: string
    slug: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Array<{ item: string }>
    programs: Array<{ item: string }>
    typeTraining: Array<{ item: string }>
    subInfoText: Array<{ item: string }>
    subInfoContent: Array<{ description: string; image: string }>
}
