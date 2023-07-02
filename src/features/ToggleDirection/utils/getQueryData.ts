import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

interface GetQueryData {
    direction: string
    categoryDietetics: string
    categoryPsychology: string
    categoryMedicine: string
    filterProgram: string
    filterTraining: string
    filterDuration: string
}

const getQueryData = (): GetQueryData => {
    return {
        direction: filterCourseStore.direction,
        categoryDietetics: filterCourseStore.categoryDietetics,
        categoryPsychology: filterCourseStore.categoryPsychology,
        categoryMedicine: filterCourseStore.categoryMedicine,
        filterProgram: filterCourseStore.filterProgram,
        filterTraining: filterCourseStore.filterTraining,
        filterDuration: filterCourseStore.directionQuery.toString(),
    }
}

export default getQueryData
