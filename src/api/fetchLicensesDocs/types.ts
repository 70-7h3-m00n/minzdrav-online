import { Image } from '@/src/api/types'

export interface LicensesDocs {
    data: Array<{
        description: string
        document: Image[]
    }>
}
