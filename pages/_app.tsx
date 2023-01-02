import "/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: AppProps) {
  const ResponsiveImage = (props) => (
    <Image alt={props.alt} layout="responsive" {...props} />
  );

  const components = {
    img: ResponsiveImage,
  };

  return (
    <>
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
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
