import React from 'react'
import { contentToggleStore, EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'

interface IUseContentToggle {
    toggle: (type: EnumContentToggle) => void
    [EnumContentToggle.psychology]: boolean
    [EnumContentToggle.medicine]: boolean
    [EnumContentToggle.dietetics]: boolean
}

const useContentToggle = (): IUseContentToggle => {
    const { toggle, psychology, medicine, dietetics } = contentToggleStore.contentToggle
    return { toggle, psychology, medicine, dietetics }
}

export default useContentToggle
