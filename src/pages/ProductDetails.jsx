/* eslint-disable no-unused-vars */
import React from "react";
import CarouselDemoImage from "../assets/carousel_demo.webp";
import ProductDetailsCarousel from "../components/ProductDetails/ProductDetailsCarousel";

function ProductDetails() {
  return (
    <>
      <div className="container mx-auto">
        <div className="md:flex flex-col md:flex-row justify-items-center items-center mt-20 sm:p-10 p-5">
          <div className="sm:w-1/2">
            <ProductDetailsCarousel />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <div className="flex flex-col content-evenly">
              <h2 className="text-5xl text-orange-500 mt-10 sm:mt-0">
                Ultimate Maple Crème Cookies
              </h2>
              <p className="text-lg text-gray-500 my-1">300 g</p>
              <p className="text-3xl text-red-800 my-2">$1.88ea</p>
              <p className="text-md text-gray-500 my-1">$0.67/ 100g</p>
            </div>
            <div className="text-gray-800 mt-5 flex flex-col">
              <div className="flex ">
                <button className="bg-black text-white py-2 px-4 rounded-md w-1/2">
                  Add to Wishlist.
                </button>
                <div className="flex align-center p-1 justify-between w-1/2 ms-5 border-2">
                  <div className="">
                    <button className="bg-black text-white py-2 px-4 rounded-md">
                      -
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span>1</span>
                  </div>
                  <div className="">
                    <button className="bg-black text-white py-2 px-4 rounded-md ">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button className="bg-black text-white py-2 px-4 rounded-md mt-5">
                Add to Cart.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
