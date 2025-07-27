/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/FullScreenLoader";
import { FaRegUser } from "react-icons/fa";
import { logoutUser } from "../../redux/features/auth/authThunkActions";
import { resetCart } from "../../redux/features/cart/cartSlice";

function NewHeader2() {
  const [isOpen, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const { cartLoading, totalItems } = useSelector((state) => state.cart);
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  // const totalItems = cartItems?.data?.products?.reduce((acc, item) => {
  //   return acc + Number(item.quantity);
  // }, 0);

  const closeMenuOnClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (loading) return <Loader />;

  return (
    <>
      <div className="sticky top-0 z-40 bg-white">
        {/* Mobile Header */}
        <div className="md:hidden mt-4">
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="py-1">
                  <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                </div>
                <div>
                  <Link to="/" className="" href="/">
                    <img src={Logo} className="w-[4rem]" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 px-3 py-2">
                <div>
                  <Link to="/cart">
                    <IoLocation
                      className="text-black group-hover:text-black"
                      size="25px"
                    />
                  </Link>
                </div>
                <div className="relative">
                  <Link to="/cart">
                    <MdOutlineShoppingCart
                      className="text-black group-hover:text-black"
                      size="25px"
                    />
                  </Link>
                  {isAuthenticated ? (
                    <div className="-right-1.5 -top-2.5 absolute bg-iceberg-pc-red flex font-default font-semibold h-[18px] items-center justify-center min-w-[18px] rounded-full text-center text-white text-xs bg-red-600">
                      {cartLoading ? "" : totalItems}
                    </div>
                  ) : (
                    <div className="-right-1.5 -top-2.5 absolute bg-iceberg-pc-red flex font-default font-semibold h-[18px] items-center justify-center min-w-[18px] rounded-full text-center text-white text-xs bg-red-600">
                      0
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Search bar for mobile */}
            <div className="search-bar flex-1 flex items-center mx-2">
              <div className="relative form-control w-full input-bordered ">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search"
                  className="input input-bordered md:w-auto h-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch />
                </span>
              </div>
            </div>
          </div>

          {/* Hidden content for menu */}
          <div
            className={`bg-white fixed left-0 w-full h-full nav-color px-10 z-50 transition-all duration-500 ease-in-out overflow-y-auto${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col justify-between h-4/5">
              <div className="pt-10 overflow-scroll">
                <Link onClick={() => setOpen(false)} to="/category/grocery">
                  <li className="mb-5 list-none text-2xl font-bold!">
                    Dairy & Eggs
                  </li>
                </Link>
                <Link onClick={() => setOpen(false)} to="/category/grocery">
                  <li className="mb-5 list-none text-2xl font-semibold!">
                    Fruits & Vegetables
                  </li>
                </Link>
                <Link onClick={() => setOpen(false)} to="/category/grocery">
                  <li className="mb-5 list-none text-2xl font-semibold!">
                    Meat
                  </li>
                </Link>
                <Link onClick={() => setOpen(false)} to="/category/grocery">
                  <li className="mb-5 list-none text-2xl font-semibold!">
                    Bakery
                  </li>
                </Link>
                <Link onClick={() => setOpen(false)} to="/category/grocery">
                  <li className="mb-5 list-none text-2xl font-semibold!">
                    Sweets
                  </li>
                </Link>
              </div>
              {/* <div className="flex flex-col"> */}
              {!isAuthenticated ? (
                <div className="flex flex-col w-full">
                  <Link
                    to="/signin"
                    className="bg-black text-white active:bg-white active:text-black active:border active:border-black text-center text-lg transition-colors duration-200 px-5 py-3 rounded-lg cursor-pointer text-black font-medium p-3 mb-3"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-black text-white active:bg-white active:text-black active:border active:border-black text-center text-lg transition-colors duration-200 px-5 py-3 rounded-lg cursor-pointer text-black font-medium p-3 mb-3"
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col w-full">
                  <Link
                    onClick={() => {
                      dispatch(logoutUser());
                      dispatch(resetCart());
                      setOpen(false);
                    }}
                    className="bg-black text-white active:bg-white active:text-black active:border active:border-black text-center text-lg transition-colors duration-200 px-5 py-3 rounded-lg cursor-pointer text-black font-medium p-3 mb-3"
                  >
                    Logout
                  </Link>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        {/* First div consisting search and logo */}
        <div className="hidden md:grid grid-cols-12 gap-4 justify-between items-center">
          <div className="col-span-1">
            <div className="">
              <Link to="/" className="" href="/">
                <img src={Logo} className="w-[6rem]" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-6">
            <div className="relative form-control w-full input-bordered ">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
                className="input input-bordered md:w-auto h-10"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-5 px-4">
            <div className="flex justify-end items-center">
              <div className="flex">
                <div className="ps-2 py-1">
                  <IoLocation color="gray" size="20px" />
                </div>
                <div className="pe-2">
                  <div className="text-gray-500 text-xs">Pick up at</div>
                  <div className="text-sm md:text-md">
                    Caldas Xavier, Portugal
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="ps-2 py-1/2">
                  <IoMdTime color="gray" size="20px" />
                </div>
                <div className="pe-2">
                  <div className="text-gray-500 text-xs">Pick up by</div>
                  <div className="text-sm md:text-md">10:00 am, tomorrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second div consisting categories and login options*/}
        <div className="hidden md:flex bg-black justify-between items-center py-1">
          <div className="grow">
            <ul className="flex">
              <Link to="/category/grocery">
                <li className="menu-item text-sm mx-1 px-2 lg:text-lg lg:mx-3 lg:px-3 text-white font-medium hover:cursor-pointer">
                  Dairy & Eggs
                </li>
              </Link>
              <Link to="/category/dairy">
                <li className="menu-item text-sm mx-1 px-2 lg:text-lg lg:mx-3 lg:px-3 text-white font-medium hover:cursor-pointer">
                  Fruits & Vegetables
                </li>
              </Link>
              <Link to="/category/sweets">
                <li className="menu-item text-sm mx-1 px-2 lg:text-lg lg:mx-3 lg:px-3 text-white font-medium hover:cursor-pointer">
                  Meat
                </li>
              </Link>
              <Link to="/category/munchings">
                <li className="menu-item text-sm mx-1 px-2 lg:text-lg lg:mx-3 lg:px-3 text-white font-medium hover:cursor-pointer">
                  Bakery
                </li>
              </Link>
              <Link to="/category/baby-food">
                <li className="menu-item text-sm mx-1 px-2 lg:text-lg lg:mx-3 lg:px-3 text-white font-medium hover:cursor-pointer">
                  Sweets
                </li>
              </Link>
            </ul>
          </div>
          <div className="mx-3">
            <div className="flex items-center">
              {!isAuthenticated ? (
                <div>
                  <Link
                    to="/signin"
                    className="text-white menu-item cursor-pointer text-sm mx-1 px-2 lg:text-lg lg:mx-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white menu-item cursor-pointer text-sm mx-1 px-2 lg:text-lg lg:mx-1"
                  >
                    Sign Up
                  </Link>
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
                          <h1
                            onClick={() => {
                              dispatch(logoutUser());
                              dispatch(resetCart());
                            }}
                          >
                            Logout
                          </h1>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <Link to="/cart" onClick={closeMenuOnClick}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-white group relative">
                    <MdOutlineShoppingCart
                      className="text-white group-hover:text-black"
                      size="20px"
                    />
                    {isAuthenticated ? (
                      <div className="-right-0.5 -top-0.5 absolute bg-iceberg-pc-red flex font-default font-semibold h-[18px] items-center justify-center min-w-[18px] rounded-full text-center text-white text-xs bg-red-600">
                        {cartLoading ? "" : totalItems}
                      </div>
                    ) : (
                      <div className="-right-0.5 -top-0.5 absolute bg-iceberg-pc-red flex font-default font-semibold h-[18px] items-center justify-center min-w-[18px] rounded-full text-center text-white text-xs bg-red-600">
                        0
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHeader2;
