import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

function Page({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title + " | Zero 1 Studio"}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css?family=Open Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <div className="flex min-h-screen w-full flex-col">
        <Nav />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export { Page };
