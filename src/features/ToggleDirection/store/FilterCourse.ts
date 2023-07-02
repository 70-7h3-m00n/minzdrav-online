import { cast, getSnapshot, Instance, SnapshotOut, types } from 'mobx-state-tree'

const FilterCourse = types
    .model('FilterCourse', {
        direction: types.string,
        categoryDietetics: types.string,
        categoryPsychology: types.string,
        categoryMedicine: types.string,
        filterProgram: types.string,
        filterTraining: types.string,
        filterDuration: types.array(types.number),
        searchCourse: types.string,
    })
    .actions(self => ({
        setCategoryDietetics(category: string) {
            self.categoryDietetics = category
        },
        setCategoryPsychology(category: string) {
            self.categoryPsychology = category
        },
        setCategoryMedicine(category: string) {
            self.categoryMedicine = category
        },
        setFilterProgram(program: string) {
            self.filterProgram = program
        },
        setFilterTraining(training: string) {
            self.filterTraining = training
        },
        setFilterDuration(duration: Array<number>) {
            self.filterDuration = cast(duration)
        },
        setSearchCourse(search: string) {
            self.searchCourse = search
        },
        setDirection(direction: string) {
            self.direction = direction
        },
    }))
    .views(self => ({
        get directionQuery() {
            return getSnapshot(self.filterDuration)
        },
    }))

export const filterCourseStore = FilterCourse.create({
    direction: '',
    categoryDietetics: '',
    categoryPsychology: '',
    categoryMedicine: '',
    filterProgram: '',
    filterTraining: 'any',
    filterDuration: [1, 24],
    searchCourse: '',
})

interface IFilterCourse extends Instance<typeof FilterCourse> {}
export interface IFilterCourseSnapshotOut extends SnapshotOut<typeof FilterCourse> {}
