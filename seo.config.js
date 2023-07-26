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
                width: 512,
                height: 512,
                alt: 'Favicon description',
            },
        ],
    },
    defaultTitle: 'Московский Институт Медецинского Образования',
    description: 'Получи новую профессию или повысь квалификацию',
    canonical: 'https://minzdrav.online',
}

export default SEO
