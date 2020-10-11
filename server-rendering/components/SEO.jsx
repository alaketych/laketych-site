import React from 'react'
import Head from 'next/head'

function SEO({ desc }) {
    return (
        <Head>
            <title>Alexandr Laketych</title>
            <meta name="description" content={ desc } />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content="" />
            <meta name="og:description" property="og:description" content="" />
            <meta property="og:site_name" content="" />
            <meta property="og:url" content="" />
            <meta name="twitter:card" content="" />
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content="" />
            <meta name="twitter:site" content="" />
            <meta name="twitter:creator" content="" />

            <link rel="stylesheet" href="" />
            <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
            <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

            <meta property="og:image" content="" />
            <meta name="twitter:image" content="" />

            <script type="text/javascript" src=""></script>
        </Head>
    )
}

export default SEO