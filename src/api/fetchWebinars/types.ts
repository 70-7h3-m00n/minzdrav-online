import { Image, Item, Meta } from '@/src/api/types'

export interface IWebinarData {
    data: Webinar[]
    meta: Meta
}

export interface Webinar {
    id: number
    slug: string
    description: string
    speaker: string
    startTime: string
    category: string
    image: Image[]
}
