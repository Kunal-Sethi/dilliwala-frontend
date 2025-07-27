/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import NewHeader from "../Header/NewHeader.jsx";
import Footer from "../Footer/Footer.jsx";
import NewHeader2 from "../Header/NewHeader2.jsx";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        {location.pathname === "/signin" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password" ? null : (
          <NewHeader2 />
        )}
        {children}
        {location.pathname === "/signin" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password" ? null : (
          <Footer />
        )}
      </div>
    </>
  );
};

export default Layout;
