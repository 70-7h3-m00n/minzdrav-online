import { Item } from '@/src/api/types'

export interface IRecommendedPrograms {
    data: RecommendedPrograms[]
}

export interface RecommendedPrograms {
    id: number
    name: string
    typeCourse: string
    color: string
    durationTraining: number
    pathCourse: string
    categories: Item[]
    programs: Item[]
}
