import React from 'react'
import Head from 'next/head'
import { SEO, Header, CTA, Footer } from './_index'

function Layout({ children }) {
    return (
        <>
            <SEO
                title="Personal tech blog"
            />
            <Header />

            { children }

            <CTA />
            <Footer />
        </>
    )
}

export default Layout
