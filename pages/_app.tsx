import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const use = async () => {
            (await import('tw-elements')).default;
        };
        use();
    }, []);


    return <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DM4ZKX9JBJ"
            strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-DM4ZKX9JBJ');
            `}
        </Script>
        <Component {...pageProps} />
    </>
}

export default MyApp