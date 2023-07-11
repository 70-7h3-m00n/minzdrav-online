import { Item, ItemCard } from '@/src/api/types'

export interface ICourseName {
    data: CourseName[]
}

export interface CourseName {
    id: number
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    description: string
    pathCourse: string
    header: string
    typeTrainingHeader: string
    categories: Item[]
    subInfoContent: ItemCard[]
    subInfoText: Item[]
    programs: Item[]
    typeTraining: Item[]
}
