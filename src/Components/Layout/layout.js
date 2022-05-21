import { Header, Footer } from "../index";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main className="p-5 h-screen ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
