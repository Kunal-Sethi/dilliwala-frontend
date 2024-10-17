/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-black p-5 ">
        <div className="flex">
          <div className="text-white w-1/3 px-16">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
