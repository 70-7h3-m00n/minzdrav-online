import { Instance, SnapshotOut, types } from 'mobx-state-tree'

const MapInstitute = types
    .model('Map', {
        toggleEvents: types.boolean,
    })
    .actions(self => ({
        onToggleEvents(event: boolean) {
            self.toggleEvents = event
        },
    }))

export const mapInstitute = MapInstitute.create({
    toggleEvents: false,
})

export interface IMapInstitute extends Instance<typeof MapInstitute> {}
export interface IMapInstituteSnapshotOut extends SnapshotOut<typeof MapInstitute> {}
