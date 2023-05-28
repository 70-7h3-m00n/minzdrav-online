import { Instance, types } from 'mobx-state-tree'

export enum EnumContentToggle {
    medicine = 'medicine',
    psychology = 'psychology',
    dietetics = 'dietetics',
}

export const ContentToggle = types
    .model('ContentToggle', {
        [EnumContentToggle.medicine]: types.boolean,
        [EnumContentToggle.psychology]: types.boolean,
        [EnumContentToggle.dietetics]: types.boolean,
    })
    .actions(self => ({
        toggle(type: EnumContentToggle) {
            self.dietetics = false
            self.medicine = false
            self.psychology = false
            if (type in self) {
                self[type] = true
            }
        },
    }))

export type IContentToggle = Instance<typeof ContentToggle>

const ContentToggleStore = types.model('ContentToggleStore', {
    contentToggle: ContentToggle,
})

export const contentToggleStore = ContentToggleStore.create({
    contentToggle: {
        medicine: false,
        psychology: false,
        dietetics: false,
    },
})
