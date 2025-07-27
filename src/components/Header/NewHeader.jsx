/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/auth/authThunkActions";
import InlineLoader from "../Loader/InlineLoader";
import Loader from "../Loader/FullScreenLoader";

function Header() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="bg-white">
          <div className="px-4 flex items-center justify-between">
            {/* Hamburger Menu for smaller screens */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black"
              >
                <MdMenu size="30px" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-none">
              <Link to="/" className="" href="/">
                <img src={Logo} className="w-20" alt="Logo" />
              </Link>
            </div>

            {/* Search bar */}
            <div className="search-bar flex-1 flex items-center mx-2">
              <div className="form-control w-full input-bordered ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered md:w-auto h-10"
                />
              </div>
            </div>

            {/* Pickup start */}
            <div className="flex-none px-2">
              <div className="flex items-end">
                <div className="ps-2 py-1">
                  <IoLocation color="gray" size="20px" />
                </div>
                <div className="pe-2">
                  <div className="text-gray-500 text-xs">Pick up at</div>
                  <div className="text-md">Caldas Xavier, Portugal</div>
                </div>
              </div>
            </div>
            <div className="flex-none px-2">
              <div className="flex items-end">
                <div className="ps-2 py-1/2">
                  <IoMdTime color="gray" size="20px" />
                </div>
                <div className="pe-2">
                  <div className="text-gray-500 text-xs">Pick up by</div>
                  <div className="text-md">10:00 am, tomorrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full menu displayed for larger screens */}
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } bg-black lg:items-center lg:justify-between lg:flex-row`}
        >
          <div className="w-full">
            <ul className="flex flex-col lg:flex-row p-4">
              <Link to="/category/grocery" onClick={closeMenuOnClick}>
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base">
                  Grocery
                </li>
              </Link>
              <Link to="/category/dairy" onClick={closeMenuOnClick}>
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base">
                  Dairy
                </li>
              </Link>
              <Link to="/category/sweets" onClick={closeMenuOnClick}>
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base">
                  Sweets
                </li>
              </Link>
              <Link to="/category/munchings" onClick={closeMenuOnClick}>
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base">
                  Munchings
                </li>
              </Link>
              <Link to="/category/baby-food" onClick={closeMenuOnClick}>
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base">
                  Baby Food
                </li>
              </Link>
            </ul>
          </div>

          {!isAuthenticated ? (
            <div className="container flex justify-end">
              <div className="flex w-36">
                <Link to="/signin" className="px-2" onClick={closeMenuOnClick}>
                  <p className="text-white menu-item cursor-pointer">Signin</p>
                </Link>
                <Link to="/signup" className="px-2" onClick={closeMenuOnClick}>
                  <p className="text-white menu-item cursor-pointer">Signup</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="flex justify-center items-center">
                <div className="dropdown dropdown-end self-center">
                  <div
                    tabIndex={0}
                    className="avatar placeholder cursor-pointer"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-white group">
                      <FaRegUser
                        className="text-white group-hover:text-black"
                        size="18px"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <Link to="/profile" onClick={closeMenuOnClick}>
                        <h1>Profile</h1>
                      </Link>
                    </li>
                    <li>
                      <h1 onClick={() => dispatch(logoutUser())}>Logout</h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Cart */}
          <div className="flex lg:mr-4">
            <Link to="/cart" onClick={closeMenuOnClick}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-white group">
                <MdOutlineShoppingCart
                  className="text-white group-hover:text-black"
                  size="20px"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
