import dev from '@/src/config/dev'

interface RouterApi {
    root: 'http://localhost:5000/api' | 'https://api.new-imo.msk.ru/api'
    router: {
        resource: string
        partners: string
        programs: string
    }
}
interface RouteDomainFront {
    root: 'http://localhost:3000' | 'https://www.new-imo.msk.ru'
}
interface RouteDomainBack {
    root: 'http://localhost:5000' | 'https://api.new-imo.msk.ru'
}

export const routeDomainFront: RouteDomainFront = {
    root: dev ? 'http://localhost:3000' : 'https://www.new-imo.msk.ru',
}

export const routeDomainBack: RouteDomainBack = {
    root: dev ? 'http://localhost:5000' : 'https://api.new-imo.msk.ru',
}

export const routerBack: RouterApi = {
    root: `${routeDomainBack.root}/api`,
    router: {
        resource: '/resources',
        partners: '/partners',
        programs: '/courses',
    },
}

export const routerFront = {
    root: `${routeDomainFront.root}/api/lead`,
}
