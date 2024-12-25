/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Router>
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin Routes */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
