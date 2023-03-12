import Footer from "../Footer";
import Nav from "../Nav";

function Page({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Nav />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export { Page };
