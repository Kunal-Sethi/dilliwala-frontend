import { Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/scrollToTop";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";

function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert("Form is submitted");
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-3/5  bg-signInColor">
          <Link to="/" className="" href="/">
            <img src={Logo} className="w-20" alt="Logo" />
          </Link>
        </div>
        <div className="w-2/5 container mx-auto">
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Welcome Back!
              </h1>
              <p className="text-center text-gray-500 mb-6">
                Please sign in to your account.
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
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between items-center">
                  {/* <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div> */}
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:underline focus:outline-none "
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-black hover:bg-gray-600 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Sign In
                </button>
              </form>
              <p className="text-center text-gray-500 mt-6">
                Dont have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
