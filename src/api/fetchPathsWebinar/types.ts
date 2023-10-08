import { Meta } from '@/src/api/types'

export interface IWebinarPathsData {
    data: Webinar[]
    meta: Meta
}

interface Webinar {
    id: number
    slug: string
}
