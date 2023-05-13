type ArrayRouterLinksFooter = Array<{
    text: string
    link: string | null
    subLink?: Array<{
        text: string
        link: string
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
                text: 'subLinkReviews',
                link: '/',
            },
            {
                text: 'subLinkLicenses',
                link: '/',
            },
            {
                text: 'subLinkDocuments',
                link: '/',
            },
        ],
    },
]
