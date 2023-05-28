import React from 'react'
import styles from './styles.module.scss'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

interface InterfaceLayout {
    children: JSX.Element
}

const Layout = ({ children }: InterfaceLayout): JSX.Element => {
    return (
        <data className={styles.app}>
            <Header />
            <main className={styles.layout}>{children}</main>
            <Footer />
        </data>
    )
}

export default Layout
