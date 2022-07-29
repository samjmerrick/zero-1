import Head from 'next/head'
import Nav from './nav'

function Page({ children, meta }) {
    return (
        <>
            <Head>
                <title>{meta.title} | Zero 1 Studio</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Nav />
            <div className="bg-slate-900 text-white w-full h-full">

                <div className='container w-full md:max-w-6xl mx-auto space-y-4 px-5'>
                    {children}
                </div>
            </div>
        </>
    )
}

export { Page };