import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'

type ArrayRouterLinksFooter = Array<{
    text: string
    link: string | null
    subLink?: Array<{
        text: string
        direction: EnumContentToggle
    }>
}>

export const arrayRouterLinksFooter: ArrayRouterLinksFooter = [
    {
        text: 'linkHome',
        link: '/',
    },
    {
        text: 'linkNews',
        link: '/',
    },
    {
        text: 'linkWebinars',
        link: '/',
    },
    {
        text: 'groupLinkUniversity',
        link: null,
        subLink: [
            {
                text: 'medicine',
                direction: EnumContentToggle.medicine,
            },
            {
                text: 'psychology',
                direction: EnumContentToggle.psychology,
            },
            {
                text: 'dietetics',
                direction: EnumContentToggle.dietetics,
            },
        ],
    },
]
