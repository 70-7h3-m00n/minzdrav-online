import { filterCourseStore } from '@/src/features/ToggleDirection/store/FilterCourse'

interface GetFilterActions {
    setFilterDuration: (duration: Array<number>) => void
    setFilterTraining: (training: string) => void
    setFilterProgram: (program: string) => void
    setSearchCourse: (search: string) => void
    setCategoryMedicine: (category: string) => void
    setCategoryDietetics: (category: string) => void
    setCategoryPsychology: (category: string) => void
    setDirection: (direction: string) => void
}

const getFilterActions = (): GetFilterActions => {
    const {
        setFilterDuration,
        setFilterTraining,
        setFilterProgram,
        setSearchCourse,
        setCategoryMedicine,
        setCategoryDietetics,
        setCategoryPsychology,
        setDirection,
    } = filterCourseStore
    return {
        setFilterDuration,
        setFilterTraining,
        setFilterProgram,
        setSearchCourse,
        setCategoryMedicine,
        setCategoryDietetics,
        setCategoryPsychology,
        setDirection,
    }
}

export default getFilterActions
