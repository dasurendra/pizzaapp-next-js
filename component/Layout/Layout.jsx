import Footer from "../Footer/Footer";
import Navvbar from "../Navbar/Navvbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navvbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
