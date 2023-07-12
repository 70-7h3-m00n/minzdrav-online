import { useRouter } from 'next/router'

const parseUrlParams = ({ router }: { router: ReturnType<typeof useRouter> }): Record<string, string> | undefined => {
    const params = router.asPath.split('?')[1]

    if (params) return params.split('&').reduce((acc, cur) => ({ ...acc, [cur.split('=')[0]]: cur.split('=')[1] }), {})

    return undefined
}

export default parseUrlParams
