import React from 'react'
import styles from './styles.module.scss'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import UpBtn from '@/src/components/UpBtn'

interface InterfaceLayout {
    children: JSX.Element
}

const Layout = ({ children }: InterfaceLayout): JSX.Element => {
    return (
        <div className={styles.app}>
            <UpBtn />
            <Header />
            <div className={styles.layout}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
