import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'
import parseUrlParams from '@/src/utils/utm/parseUrlParams'
import UTM_KEYS from '@/src/utils/utm/utm_keys'

const NINETY_DAYS = 60 * 60 * 24 * 90

const useHandleUtms = () => {
    const router = useRouter()
    const params = parseUrlParams({ router })

    useEffect(() => {
        if (params)
            UTM_KEYS.forEach(utmKey =>
                params[utmKey] ? setCookie(utmKey, params[utmKey], { maxAge: NINETY_DAYS }) : undefined,
            )
    }, [params])
}
export default useHandleUtms
