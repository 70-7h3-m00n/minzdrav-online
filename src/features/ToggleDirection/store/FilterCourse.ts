import { cast, getSnapshot, types } from 'mobx-state-tree'

const FilterCourse = types.model('FilterCourse', {
    direction: types.string,
    categoryDietetics: types.string,
    categoryPsychology: types.string,
    categoryMedicine: types.string,
    filterProgram: types.string,
    filterTraining: types.string,
    filterDuration: types.array(types.number),
    searchCourse: types.string,
})

const FilterCourseStore = types
    .model('FilterCourseStore', {
        filterCourse: FilterCourse,
    })
    .actions(self => ({
        setCategoryDietetics(category: string) {
            self.filterCourse.categoryDietetics = category
        },
        setCategoryPsychology(category: string) {
            self.filterCourse.categoryPsychology = category
        },
        setCategoryMedicine(category: string) {
            self.filterCourse.categoryMedicine = category
        },
        setFilterProgram(program: string) {
            self.filterCourse.filterProgram = program
        },
        setFilterTraining(training: string) {
            self.filterCourse.filterTraining = training
        },
        setFilterDuration(duration: Array<number>) {
            self.filterCourse.filterDuration = cast(duration)
        },
        setSearchCourse(search: string) {
            self.filterCourse.searchCourse = search
        },
        setDirection(direction: string) {
            self.filterCourse.direction = direction
        },
    }))
    .views(self => ({
        get directionQuery() {
            return getSnapshot(self.filterCourse.filterDuration)
        },
    }))

export const filterCourseStore = FilterCourseStore.create({
    filterCourse: {
        direction: '',
        categoryDietetics: '',
        categoryPsychology: '',
        categoryMedicine: '',
        filterProgram: '',
        filterTraining: 'any',
        filterDuration: [1, 24],
        searchCourse: '',
    },
})
