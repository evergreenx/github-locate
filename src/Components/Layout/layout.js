import { Header, Footer } from "../index";

const Layout = ({ children }) => {
  return (
    <div className="App h-screen  flex flex-col">
      <Header />
      <main className="p-5 flex-1 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
