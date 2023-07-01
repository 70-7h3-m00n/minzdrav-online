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
        direction: filterCourseStore.filterCourse.direction,
        categoryDietetics: filterCourseStore.filterCourse.categoryDietetics,
        categoryPsychology: filterCourseStore.filterCourse.categoryPsychology,
        categoryMedicine: filterCourseStore.filterCourse.categoryMedicine,
        filterProgram: filterCourseStore.filterCourse.filterProgram,
        filterTraining: filterCourseStore.filterCourse.filterTraining,
        filterDuration: filterCourseStore.directionQuery.toString(),
    }
}

export default getQueryData
