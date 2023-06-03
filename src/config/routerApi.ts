import dev from '@/src/config/dev'

interface RouterApi {
    root: 'http://localhost:5000/api' | 'https://api.new-imo.msk.ru/api'
    router: {
        resource: string
        partners: string
        programs: string
    }
}

export const routerApi: RouterApi = {
    root: dev ? 'http://localhost:5000/api' : 'https://api.new-imo.msk.ru/api',
    router: {
        resource: '/resources',
        partners: '/partners',
        programs: '/courses',
    },
}
