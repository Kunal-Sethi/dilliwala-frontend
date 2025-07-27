/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="bg-black p-5">
        <div className="flex flex-col">
          <div className="flex justify-end w-full">
            <div className="p-1 md:p-2">
              <AiFillFacebook size="25px" fill="white" />
            </div>
            <div className="p-1 md:p-2">
              <AiFillInstagram fill="white" size="25px" />
            </div>
            <div className="p-1 md:p-2">
              <RiTwitterXFill fill="white" size="22px" />
            </div>
          </div>
          {/* Mobile Footer */}
          <div className="block md:hidden">Mobile</div>

          {/* Desktop Footer */}
          <div className="hidden md:block">Desktop</div>
          {/* <div className="text-white w-1/3 px-16">
            <Link to="/">Dilliwala Global Foods</Link>
          </div>
          <div className="text-white w-2/3 flex justify-evenly">
            <div>
              <Link to="/" className="">
                <h3 className="py-4 font-light hover:underline hover:underline-offset-8 cursor-pointer">
                  About us
                </h3>
              </Link>
              <Link to="/">
                <h3 className="py-4 font-light hover:underline hover:underline-offset-8 cursor-pointer">
                  Contact
                </h3>
              </Link>
              <Link to="/">
                <h3 className="py-4 font-light hover:underline hover:underline-offset-8 cursor-pointer">
                  Terms and Conditions
                </h3>
              </Link>
            </div>
            <div>
              <div>
                <h3 className="py-4 font-light hover:underline hover:underline-offset-8 cursor-pointer">
                  Dilliwala wholesale
                </h3>
              </div>
              <div>
                <h3 className="py-4 font-light hover:underline hover:underline-offset-8 cursor-pointer">
                  Careers
                </h3>
              </div>
            </div>
            <div className="flex">
              <div className="p-2">
                <FaFacebook size="25px" fill="#1877F2" />
              </div>
              <div className="p-2 instagram-gradient">
                <FaSquareInstagram size="25px" className="instagram-gradient" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
