import { Image } from '@/src/api/types'

export interface Licenses {
    data: Array<{
        description: string
        image: Image[]
    }>
}
