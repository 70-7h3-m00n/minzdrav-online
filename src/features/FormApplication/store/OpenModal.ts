import { Instance, types } from 'mobx-state-tree'

const OpenModal = types
    .model('OpenModal', {
        isOpen: types.boolean,
        status: types.boolean,
    })
    .actions(self => ({
        toggleModal(open: boolean) {
            self.isOpen = open
        },
        setStatus(status: boolean) {
            self.status = status
            self.isOpen = true
        },
    }))

export const openModalStore = OpenModal.create({
    isOpen: false,
    status: true,
})

export interface IOpenModalStore extends Instance<typeof OpenModal> {}
