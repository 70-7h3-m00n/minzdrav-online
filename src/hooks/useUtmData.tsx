import UTM_KEYS from '@/src/utils/utm/utm_keys'
import { getCookie } from 'cookies-next'

const useUtmData = () => {
    return UTM_KEYS.reduce(
        (acc, cur) => ({ ...acc, [cur]: getCookie(cur) }),
        {} as { [key in (typeof UTM_KEYS)[number]]: string | undefined },
    )
}

export default useUtmData
