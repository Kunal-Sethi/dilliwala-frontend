/* eslint-disable no-unused-vars */
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
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
        <Header />
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
      </Router>
      {/*<ProductSlider /> */}
      {/* <Header />
      <NewTrialNavbar />
      <FrontPageCarousel />
      <ProductSlider heading="Whats Hot.." />
      <ProductSlider heading="Whats Trending.." />
      <ProductSlider heading="New Products.." />
      <ProductSlider heading="Fresh picks from local farmers.." /> */}
      {/* <ProductDetails /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
