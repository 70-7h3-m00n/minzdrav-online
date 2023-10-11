import { Instance, SnapshotOut, types } from 'mobx-state-tree'

const FilterWebinars = types
    .model('FilterWebinars', {
        filter: types.string,
    })
    .actions(self => ({
        setFilterWebinar(category: string) {
            self.filter = category
        },
    }))

export const filterWebinars = FilterWebinars.create({
    filter: 'allCategory',
})

export interface IFilterCourse extends Instance<typeof FilterWebinars> {}
export interface IFilterCourseSnapshotOut extends SnapshotOut<typeof FilterWebinars> {}
