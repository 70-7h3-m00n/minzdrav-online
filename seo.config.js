import { routeDomainFront } from '@/src/config/routerApi'

const SEO = {
    openGraph: {
        type: 'website',
        locale: 'ru',
        url: 'https://minzdrav.online',
        site_name: 'minzdrav.online',
        images: [
            {
                url: `${routeDomainFront.root}/icons/favicon.ico`,
                width: 32,
                height: 32,
                alt: 'Favicon description',
            },
        ],
    },
    defaultTitle: 'Московский Институт Медецинского Образования',
    description: 'Получи новую профессию или повысь квалификацию',
    canonical: 'https://minzdrav.online',
    dangerouslySetAllPagesToNoIndex: true,
    dangerouslySetAllPagesToNoFollow: true,
    noindex: true,
    nofollow: true,
}

export default SEO
