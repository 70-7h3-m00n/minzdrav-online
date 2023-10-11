import { Image, Item, Meta, Syllabus } from '@/src/api/types'

export interface IWebinarData {
    data: Webinar[]
    meta: Meta
}

export interface Webinar {
    id: number
    description: string
    speaker: string
    startTime: string
    category: string
    header: string
    professionSpeaker: string
    subHeader: string
    descriptionWebinar: string
    availability: string
    subDescription: string
    formDescription: string
    image: Image[]
    imageSpeaker: Image[]
    listInfoWebinar: Item[]
    listWebinarProgram: Item[]
    listWhichProfessions: Item[]
    listDuration: Item[]
    listTeacherCharacteristics: Item[]
    FAQ: Syllabus[]
}
