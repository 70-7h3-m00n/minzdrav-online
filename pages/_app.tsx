import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Roboto } from '@next/font/google'
import '@/styles/globals.scss'
import '@/styles/reset.scss'
import Layout from '@/src/components/Layout'
import Scripts from '@/src/components/Scripts'
import ModalAlert from '@/src/features/FormApplication/components/ModalAlert'
import useHandleUtms from '@/src/hooks/useHandleUtms'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '@/seo.config'
import { routeDomainFront } from '@/src/config/routerApi'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

function App({ Component, pageProps }: AppProps) {
    useHandleUtms()

    return (
        <>
            <DefaultSeo {...SEO} />
            <LogoJsonLd logo={`${routeDomainFront.root}/icons/favicon.ico`} url={routeDomainFront.root} />

            <div className={roboto.className}>
                <ModalAlert />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>

            <Scripts />
        </>
    )
}

export default appWithTranslation(App)
