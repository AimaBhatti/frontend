import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShippingBanner from './ShippingBanner'
import { UserProvider } from '../lib/authContext'

export default function Layout({user, loading = false, children}) {
    return (
        <UserProvider value={{user, loading}}>
            <Header />
            {children}
            <ShippingBanner />
            <Footer />
        </UserProvider>
    )
}
