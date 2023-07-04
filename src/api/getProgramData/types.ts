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

export interface TrainingContentClass {
    id: number
    syllabusRetraining: Syllabus[]
    syllabusQualifications: Syllabus[]
    listenersRetraining: AdmissionQualification[]
    listenersQualifications: AdmissionQualification[]
    admissionQualifications: AdmissionQualification[]
    admissionRetraining: AdmissionQualification[]
    IssuedDocumentsQualifications: IssuedDocuments[]
    IssuedDocumentsRetraining: IssuedDocuments[]
}

export interface IssuedDocuments {
    id: number
    description: string
    image: Image
}

export interface Image {
    data: Datum[]
}

export interface Datum {
    id: number
    attributes: {
        url: string
    }
}

export interface AdmissionQualification {
    id: number
    item: string
}

export interface Syllabus {
    id: number
    header: string
    description: string
}

interface Attributes {
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    categories: Category[]
    programs: Program[]
    typeTraining: { id: number; item: string }[]
    script: { id: number; item: string }[] | null
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
    priceCourse: { id: number; priceRetraining: number; discount: number; priceQualifications: number }
    trainingContent: TrainingContentClass
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
    priceCourse: { priceRetraining: number; discount: number; priceQualifications: number }
    script: Array<{ item: string }> | null
    trainingContent: {
        syllabusRetraining: {
            header: string
            description: string
        }[]
        syllabusQualifications: {
            header: string
            description: string
        }[]
        listenersRetraining: {
            item: string
        }[]
        listenersQualifications: {
            item: string
        }[]
        admissionQualifications: {
            item: string
        }[]
        admissionRetraining: {
            item: string
        }[]
        IssuedDocumentsQualifications: {
            description: string
            image: string
        }[]
        IssuedDocumentsRetraining: {
            description: string
            image: string
        }[]
    }
}
