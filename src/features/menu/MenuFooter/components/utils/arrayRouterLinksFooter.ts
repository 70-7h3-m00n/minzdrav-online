type ArrayRouterLinksFooter = Array<{
    text: string;
    link: string | null;
    subLink?: Array<{
        text: string;
        link: string;
    }>;
}>;

export const arrayRouterLinksFooter: ArrayRouterLinksFooter = [
    {
        text: 'home',
        link: '/',
    },
    {
        text: 'news',
        link: '/news',
    },
    {
        text: 'webinars',
        link: '/webinars',
    },
    {
        text: 'aboutUniversity',
        link: null,
        subLink: [
            {
                text: 'Отзывы',
                link: '/',
            },
            {
                text: 'Лицензии',
                link: '/',
            },
            {
                text: 'Документы',
                link: '/',
            },
        ],
    },
];
