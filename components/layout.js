import Head from 'next/head'
import {useRouter} from 'next/router'

import Header from '/components/header'
import Footer from '/components/footer'
import Showcase from '/components/Showcase'


export default function Layout({ title, keywords, description, children }) {
    const router = useRouter()
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header/>
            {router.pathname === '/' && <Showcase />}
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Uranium City History Project',
    description: 'Helping keep Uranium City alive on the web',
    keywords: 'uranium city, gunnar'
}
