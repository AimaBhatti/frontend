import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Newsletter from './Newsletter'
import ShippingBanner from './ShippingBanner'

export default function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <ShippingBanner />
            <Footer />
        </>
    )
}
