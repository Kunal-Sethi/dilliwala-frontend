/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import NewLogo from "../../assets/dilliwalaLogoLowQuality-removebg-preview.png";

function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert("Password reset link sent to your email!");
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <div className="flex min-h-screen">
        <div className="lg:w-3/5 hidden lg:flex justify-center items-center bg-signInColor">
          <Link to="/" className="" href="/">
            <img src={NewLogo} className="w-full" alt="Logo" />
          </Link>
        </div>
        <div className="lg:w-2/5 container mx-auto">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex justify-center items-center">
              <Link to="/" className="w-1/2 lg:hidden" href="/">
                <img src={NewLogo} className="" alt="Logo" />
              </Link>
            </div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Forgot Password?
              </h1>
              <p className="text-center text-gray-500 mb-6">
                Enter your email to receive a password reset link.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-black hover:bg-gray-600 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Send Reset Link
                </button>
              </form>
              <p className="text-center text-gray-500 mt-6">
                Remembered your password?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:underline focus:outline-none "
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
