import { Image, Item, ItemCard, Meta, Syllabus } from '@/src/api/types'

export interface ICourseData {
    data: Course[]
    meta: Meta
}

export interface Course {
    id: number
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    description: string
    startDateTraining: string
    studyingTime: string
    receivedDocuments: string
    pathCourse: string
    header: string
    typeTrainingHeader: string
    speakers: ItemCard[]
    categories: Item[]
    typeTraining: Item[]
    imageCourse: Image[]
    thisCourseFor: Item[]
    knowledgeList: Item[]
    skillList: Item[]
    listOfSkills: Item[]
    ourLicenses: ItemCard[]
    priceCourse: PriceCourse
    trainingContent: TrainingContent
}

export interface PriceCourse {
    id: number
    priceRetraining: number
    discount: number
    priceQualifications: number
}

export interface TrainingContent {
    id: number
    syllabusRetraining: Syllabus[]
    syllabusQualifications: Syllabus[]
    listenersRetraining: Item[]
    listenersQualifications: Item[]
    admissionQualifications: Item[]
    admissionRetraining: Item[]
    IssuedDocumentsQualifications: ItemCard[]
    IssuedDocumentsRetraining: ItemCard[]
}
