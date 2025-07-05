/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "../../utils/scrollToTop";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import { useNavigate } from "react-router-dom";
import { resetError } from "../../redux/features/auth/authSlice";
import {
  loginUser,
  checkAuthStatus,
} from "../../redux/features/auth/authThunkActions";
import Loader from "../../components/Loader/FullScreenLoader";
import InlineLoader from "../../components/Loader/InlineLoader";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // To clear the error state on dismount
    return () => dispatch(resetError());
  }, []);

  useEffect(() => {
    // resetError();
    scrollToTop();
    dispatch(checkAuthStatus())
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  // if (loading) return <Loader />;

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
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:underline focus:outline-none "
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-black hover:bg-gray-600 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black flex justify-center items-center"
                >
                  Sign In
                  {loading && <InlineLoader />}
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
