/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "../../utils/scrollToTop";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import { useNavigate } from "react-router-dom";
import { resetError } from "../../redux/features/auth/authSlice";
import { loginUser } from "../../redux/features/auth/authThunkActions";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    scrollToTop();
    if (isAuthenticated) {
      console.log("navigating from here");
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // To clear the error state on dismount
    return () => dispatch(resetError());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-3/5 flex justify-center items-center bg-signInColor">
          <Link to="/" className="" href="/">
            <img src={Logo} className="w-full" alt="Logo" />
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
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    value={email}
                    type="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      error
                        ? "border border-red-500 bg-red-50 focus:ring-red-500"
                        : "border border-gray-300 bg-gray-50 focus:ring-blue-500"
                    }`}
                    // className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      error
                        ? "border border-red-500 bg-red-50 focus:ring-red-500"
                        : "border border-gray-300 bg-gray-50 focus:ring-blue-500"
                    }`}
                    // className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
