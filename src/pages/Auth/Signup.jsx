/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import NewLogo from "../../assets/dilliwalaLogoLowQuality-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthStatus,
  registerUser,
} from "../../redux/features/auth/authThunkActions";
import { resetError } from "../../redux/features/auth/authSlice";
import InlineLoader from "../../components/Loader/InlineLoader";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // To clear the error state on dismount
    return () => dispatch(resetError());
  }, []);

  useEffect(() => {
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
    dispatch(registerUser({ fullName, email, password, contact }))
      .unwrap()
      .then(() => {
        navigate("/signin");
      });
  };

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
                Create Account
              </h1>
              <p className="text-center text-gray-500 mb-6">
                Sign up to get started!
              </p>
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    // required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500${
                      error && fullName == ""
                        ? "border border-red-500 bg-red-50 focus:ring-red-500"
                        : "border border-gray-300 bg-gray-50 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500${
                      error && contact == ""
                        ? "border border-red-500 bg-red-50 focus:ring-red-500"
                        : "border border-gray-300 bg-gray-50 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your contact number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500${
                      error && email == ""
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
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500${
                        error && password == ""
                          ? "border border-red-500 bg-red-50 focus:ring-red-500"
                          : "border border-gray-300 bg-gray-50 focus:ring-blue-500"
                      }`}
                      placeholder="Create a password"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                      {showPassword ? (
                        <FaEyeSlash
                          cursor="pointer"
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ) : (
                        <FaEye
                          cursor="pointer"
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-4 text-white bg-black hover:bg-gray-600 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-black flex justify-center items-center"
                >
                  Sign Up
                  {loading && <InlineLoader />}
                </button>
              </form>
              <p className="text-center text-gray-500 mt-6">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:underline focus:outline-none "
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
