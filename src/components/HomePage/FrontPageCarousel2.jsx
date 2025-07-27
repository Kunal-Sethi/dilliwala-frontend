/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselDemoImage from "../../assets/carousel_demo.webp";

function FrontPageCarousel2() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        effect="fade"
        className="mySwiper w-full font-page-carousel-swiper"
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row bg-yellow-400 w-full items-center">
            <div className="w-full md:w-1/2 flex flex-col px-5 py-10 sm:px-20 md:py-5">
              <div className="">
                <h2 className="text-xl lg:text-3xl">
                  This is paragraph heading.
                </h2>
              </div>
              <div className="">
                <p className="text-sm lg:text-lg">This is paragraph sentence</p>
              </div>
              <div className="my-3">
                <button className="bg-black text-white py-2 px-4 rounded-md ">
                  Go there.
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-h-100">
              <img src={CarouselDemoImage} className="" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row bg-yellow-400 w-full items-center">
            <div className="w-full md:w-1/2 flex flex-col px-5 py-10 sm:px-20 md:py-5">
              <div className="">
                <h2 className="text-xl lg:text-3xl">
                  This is paragraph heading.
                </h2>
              </div>
              <div className="">
                <p className="text-sm lg:text-lg">This is paragraph sentence</p>
              </div>
              <div className="my-3">
                <button className="bg-black text-white py-2 px-4 rounded-md ">
                  Go there.
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-h-100">
              <img src={CarouselDemoImage} className="" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row bg-yellow-400 w-full items-center">
            <div className="w-full md:w-1/2 flex flex-col px-5 py-10 sm:px-20 md:py-5">
              <div className="">
                <h2 className="text-xl lg:text-3xl">
                  This is paragraph heading.
                </h2>
              </div>
              <div className="">
                <p className="text-sm lg:text-lg">This is paragraph sentence</p>
              </div>
              <div className="my-3">
                <button className="bg-black text-white py-2 px-4 rounded-md ">
                  Go there.
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-h-100">
              <img src={CarouselDemoImage} className="" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col-reverse sm:flex-row bg-yellow-400 w-full items-center">
            <div className="w-full md:w-1/2 flex flex-col px-5 py-10 sm:px-20 md:py-5">
              <div className="">
                <h2 className="text-xl lg:text-3xl">
                  This is paragraph heading.
                </h2>
              </div>
              <div className="">
                <p className="text-sm lg:text-lg">This is paragraph sentence</p>
              </div>
              <div className="my-3">
                <button className="bg-black text-white py-2 px-4 rounded-md ">
                  Go there.
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-h-100">
              <img src={CarouselDemoImage} className="" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default FrontPageCarousel2;
