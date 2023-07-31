import { Image } from '@/src/api/types'

export interface Reviews {
    data: Array<{
        title: string
        description: string
        image: Image[]
    }>
}
