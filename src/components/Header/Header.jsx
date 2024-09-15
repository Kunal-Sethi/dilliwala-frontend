/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../../assets/dilliwalaLogoLowQuality.jpeg";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="bg-white">
          <div className="px-4 flex items-center">
            <div className="flex-none">
              <Link to="/" className="" href="/">
                <img src={Logo} className="w-20" alt="" />
              </Link>
            </div>
            <div className="search-bar flex-1 flex items-center mx-2">
              <div className="form-control w-full input-bordered ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered md:w-auto h-10"
                />
              </div>
            </div>
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
        <div className=" flex bg-black items-center justify-center">
          {/* <div className=" flex bg-orange-600 items-center justify-center"> */}
          <div className="container">
            <ul className="flex p-4">
              <Link to="/category/grocery">
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base ">
                  Grocery
                </li>
              </Link>
              <Link to="/category/dairy">
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base ">
                  Dairy
                </li>
              </Link>
              <Link to="/category/sweets">
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base ">
                  Sweets
                </li>
              </Link>
              <Link to="/category/munchings">
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base ">
                  Munchings
                </li>
              </Link>
              <Link to="/category/baby-food">
                <li className="menu-item mx-3 px-3 text-white font-medium hover:cursor-pointer text-base ">
                  Baby Food
                </li>
              </Link>
            </ul>
          </div>

          {/* Login buttons Starts */}
          <div className="container flex justify-end">
            <div className="flex w-36">
              <Link to="/signin" className="px-2">
                <p className="text-white cursor-pointer">Signin</p>
              </Link>
              <Link to="/signup" className="px-2">
                <p className="text-white cursor-pointer">Signup</p>
              </Link>
            </div>
          </div>
          {/* Login buttons Ends */}

          <div className="flex">
            {/* Dropdown start*/}
            <div className="flex justiy-center items-center">
              <div className="dropdown dropdown-end self-center">
                {/* <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div> */}
                <div tabIndex={0} className="avatar placeholder cursor-pointer">
                  <div className="hover:bg-white hover:text-black text-neutral-content w-12 rounded-full">
                    <span>GL</span>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Dropdown end */}

            {/* Cart start */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-white group">
              <MdOutlineShoppingCart
                className="text-white group-hover:text-black"
                size="20px"
              />
            </div>
            {/* Cart end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
