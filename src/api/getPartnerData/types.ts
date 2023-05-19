interface IData {
    id: number
    attributes: {
        partner: string
        logo: {
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

export interface IPartners {
    data: IData[]
    meta: {
        pagination: IPagination
    }
}
