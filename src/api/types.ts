export interface ItemCard {
    id: number
    description: string
    image: Image[]
    name: string
}

export interface Image {
    id: number
    url: string
}

export interface Item {
    id: number
    item: string
}

export interface Syllabus {
    id: number
    header: string
    description: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
