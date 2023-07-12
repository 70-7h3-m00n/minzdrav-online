import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Roboto } from '@next/font/google'
import '@/styles/globals.scss'
import '@/styles/reset.scss'
import Layout from '@/src/components/Layout'
import Head from 'next/head'
import Scripts from '@/src/components/Scripts'
import ModalAlert from '@/src/features/FormApplication/components/ModalAlert'
import useHandleUtms from '@/src/hooks/useHandleUtms'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

function App({ Component, pageProps }: AppProps) {
    useHandleUtms()

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/icons/favicon.ico' />
            </Head>

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
