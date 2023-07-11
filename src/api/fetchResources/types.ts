import { Image } from '@/src/api/types'

export interface DataItem {
    id: number
    description: string
    icon: Image[]
}

export interface IResponse {
    data: DataItem[]
}
