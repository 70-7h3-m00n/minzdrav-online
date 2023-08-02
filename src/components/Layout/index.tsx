import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import UpBtn from '@/src/components/UpBtn'
import { useRouter } from 'next/router'
import { mapInstitute } from '@/src/features/Map/store/Map'

interface InterfaceLayout {
    children: JSX.Element
}

const Layout = ({ children }: InterfaceLayout): JSX.Element => {
    const { onToggleEvents } = mapInstitute
    const route = useRouter()

    return (
        <div
            className={styles.app}
            onClick={() => (route.pathname === '/about-university' ? onToggleEvents(false) : null)}
        >
            <UpBtn />

            <Header />

            <div
                className={styles.layout}
                style={{
                    paddingBottom: route.pathname === '/courses' ? '30px' : '0px',
                }}
            >
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default observer(Layout)
