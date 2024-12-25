/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import NewHeader from "../Header/NewHeader.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password" ? null : (
        <NewHeader />
      )}
      {children}
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password" ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
