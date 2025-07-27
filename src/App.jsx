/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuthStatus } from "./redux/features/auth/authThunkActions";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getCart } from "./redux/features/cart/cartThunkActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus()).unwrap().catch();
    dispatch(getCart()).unwrap().catch();
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          {/* Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Main Pages Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/category">
            <Route path="grocery" element={<ProductDetails />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Admin Routes */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
