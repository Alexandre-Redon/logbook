import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Outlet />
      {location.pathname !== "/checkout" && <Footer />}
    </div>
  );
};

export default Layout;
