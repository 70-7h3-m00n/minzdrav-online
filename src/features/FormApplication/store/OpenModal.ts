import { Instance, types } from 'mobx-state-tree'

const OpenModal = types
    .model('OpenModal', {
        isRoutForm: types.string,
        isForm: types.boolean,
        isLoading: types.boolean,
        isOpen: types.boolean,
        status: types.boolean,
    })
    .actions(self => ({
        setStatus(status: boolean) {
            self.status = status
        },
        setLoading(loading: boolean, form: boolean, answer: boolean) {
            self.isLoading = loading
            self.isForm = form
            self.isOpen = answer
        },
        resetForm() {
            self.isOpen = false
            self.isForm = true
        },
        setRoutForm(route: string) {
            self.isRoutForm = route
        },
    }))

export const openModalStore = OpenModal.create({
    isRoutForm: '',
    isLoading: false,
    isForm: true,
    isOpen: false,
    status: true,
})

export interface IOpenModalStore extends Instance<typeof OpenModal> {}
