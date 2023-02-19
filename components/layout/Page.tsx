import Head from "next/head";
import Footer from "../Footer";
import Nav from "../Nav";

function Page({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title + " | Zero 1 Studio"}</title>
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
