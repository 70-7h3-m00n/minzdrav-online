interface IData {
    id: number
    attributes: {
        description: string
        icon: {
            data: {
                id: number
                attributes: {
                    url: string
                }
            }[]
        }
    }
}

interface IPagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export interface IResources {
    data: IData[]
    meta: {
        pagination: IPagination
    }
}
