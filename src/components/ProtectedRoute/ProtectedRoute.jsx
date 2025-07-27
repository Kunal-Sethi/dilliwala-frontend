/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loader from "../Loader/FullScreenLoader";

function ProtectedRoute({ admin = false }) {
  const { loading, isAuthenticated, userInfo } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();

  if (loading) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (admin) {
    const userRole = userInfo?.data?.role || "Customer";
    if (userRole !== "Admin") {
      // TODO: Need an unauthorized page here.
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
  }

  return <Outlet />;
}

export default ProtectedRoute;
