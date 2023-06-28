import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'

export const getQueryToggle = [
    {
        query: 'medicine',
        toggle: EnumContentToggle.medicine,
    },
    {
        query: 'psychology',
        toggle: EnumContentToggle.psychology,
    },
    {
        query: 'dietetics',
        toggle: EnumContentToggle.dietetics,
    },
]

export const getFilterQuery = [
    {
        query: 'categoryMedicine',
        action: 'setCategoryMedicine',
    },
    {
        query: 'categoryPsychology',
        action: 'setCategoryPsychology',
    },
    {
        query: 'categoryDietetics',
        action: 'setCategoryDietetics',
    },
    {
        query: 'filterProgram',
        action: 'setFilterProgram',
    },
    {
        query: 'filterTraining',
        action: 'setFilterTraining',
    },
]
