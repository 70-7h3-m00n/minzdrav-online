import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Roboto } from '@next/font/google'
import '@/styles/globals.scss'
import '@/styles/reset.scss'
import Layout from '@/src/components/Layout'
import Scripts from '@/src/components/Scripts'
import useHandleUtms from '@/src/hooks/useHandleUtms'
import { DefaultSeo } from 'next-seo'
import SEO from '@/seo.config'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

function App({ Component, pageProps }: AppProps) {
    useHandleUtms()

    return (
        <>
            <DefaultSeo {...SEO} />

            <div className={roboto.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>

            <Scripts />
        </>
    )
}

export default appWithTranslation(App)
