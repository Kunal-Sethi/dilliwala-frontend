/* eslint-disable no-unused-vars */
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewHeader from "./components/Header/NewHeader";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between min-h-screen">
          {/* <Header /> */}
          <NewHeader />
          <Routes>
            {/* Auth Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/category">
              <Route path="grocery" element={<ProductDetails />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
