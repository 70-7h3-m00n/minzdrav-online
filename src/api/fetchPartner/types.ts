import { Image } from '@/src/api/types'

interface DataItem {
    id: number
    partner: string
    logo: Image[]
}

export interface IResponse {
    data: DataItem[]
}
