import Head from 'next/head'
import {useRouter} from 'next/router'

import Header from '/components/header'
import Footer from '/components/footer'
import Showcase from '/components/Showcase'

// example here: https://selvaganesh93.medium.com/setup-next-js-with-typescript-integration-dece94e43cf5

// I guess functional components in TS don't need the 'function' declaration: 
//https://fettblog.eu/typescript-react/components/

export default function Layout({ title, keywords, description, children }: {
    title: any;
    keywords: any;
    description: any;
    children: any;
}, JSX: any, Element:any): any {
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
