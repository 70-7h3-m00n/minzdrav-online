import dev from '@/src/config/dev'

interface RouterApi {
    root: 'http://localhost:5000/api' | 'https://api.minzdrav.online/api'
    router: {
        resource: string
        partners: string
        programs: string
        speakers: string
        licenses: string
        licensesDocs: string
        reviews: string
        webinars: string
    }
}
interface RouteDomainFront {
    root: 'http://localhost:3000' | 'https://minzdrav.online'
}
interface RouteDomainBack {
    root: 'http://localhost:5000' | 'https://api.minzdrav.online'
}

export const routeDomainFront: RouteDomainFront = {
    root: dev ? 'http://localhost:3000' : 'https://minzdrav.online',
}

export const routeDomainBack: RouteDomainBack = {
    // root: dev ? 'http://localhost:5000' : 'https://api.minzdrav.online',

    root: 'https://api.minzdrav.online',
}

export const routerApi: RouterApi = {
    root: `${routeDomainBack.root}/api`,
    router: {
        resource: '/resources',
        partners: '/partners',
        programs: '/courses',
        speakers: '/speakers',
        licenses: '/licenses',
        licensesDocs: '/licenses-docs',
        reviews: '/reviews',
        webinars: '/webinars',
    },
}

interface RouterFront {
    root: string
    webinar: string
}

export const routerFront: RouterFront = {
    root: `${routeDomainFront.root}/api/lead`,
    webinar: `${routeDomainFront.root}/api/webinar`,
}
