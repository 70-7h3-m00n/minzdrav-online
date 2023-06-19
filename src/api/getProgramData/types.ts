interface ImageData {
    id: number
    attributes: {
        url: string
    }
}

interface SubInfoContent {
    id: number
    description: string
    image: {
        data: ImageData[]
    }
}

interface ImageCourse {
    data: ImageData[]
}

interface SubInfoText {
    id: number
    item: string
}

interface Program {
    id: number
    item: string
}

interface Category {
    id: number
    item: string
}
interface ThisCourseFor {
    id: number
    item: string
}

interface Attributes {
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Category[]
    programs: Program[]
    typeTraining: { id: number; item: string }[]
    subInfoContent: SubInfoContent[]
    subInfoText: SubInfoText[]
    description: string
    imageCourse: ImageCourse
    startDateTraining: string
    studyingTime: string
    receivedDocuments: string
    thisCourseFor: ThisCourseFor[]
    pathCourse: string
    knowledgeList: { id: number; item: string }[]
    skillList: { id: number; item: string }[]
    listOfSkills: { id: number; item: string }[]
    typeTrainingHeader: string
    header: string
    ourLicenses: SubInfoContent[]
    priceCourse: { id: number; price: number; discount: number | null; installmentPlan: number | null }
}

interface DataItem {
    id: number
    attributes: Attributes
}

interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

interface Meta {
    pagination: Pagination
}

export interface IPrograms {
    data: DataItem[]
    meta: Meta
}

export interface NormalizeProgramData {
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Array<{ item: string }>
    programs: Array<{ item: string }>
    typeTraining: Array<{ item: string }>
    subInfoText: Array<{ item: string }>
    subInfoContent: Array<{ description: string; image: string }>
    description: string
    imageCourse: string
    startDateTraining: string
    studyingTime: string
    receivedDocuments: string
    thisCourseFor: Array<{ item: string }>
    pathCourse: string
    knowledgeList: Array<{ item: string }>
    skillList: Array<{ item: string }>
    listOfSkills: Array<{ item: string }>
    typeTrainingHeader: string
    header: string
    ourLicenses: Array<{ description: string; image: string }>
    priceCourse: { price: number; discount: number | null; installmentPlan: number | null }
}
