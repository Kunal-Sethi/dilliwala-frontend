/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CardComponent from "./CardComponent";
import { useState } from "react";
import cookies from "../../assets/cookies.png";
import rice from "../../assets/rice.png";
import atta from "../../assets/atta.png";
import fererro from "../../assets/fererro.jpeg";
import chocolate from "../../assets/chocolate.png";
import oliveoil from "../../assets/oliveoil.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Pagination, Scrollbar } from "swiper/modules";

function ProductSlider2({ heading }) {
  return (
    <>
      <div className="w-5/6 m-auto my-10 h-full">
        <div className="mb-5">
          <h2 className="text-4xl">{heading}</h2>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          scrollbar={{
            hide: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <CardComponent
              src={cookies}
              price="$2.99"
              name="Good day cookies | Pistachio flavour"
              netWeight="10g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={rice}
              price="$17.99"
              name="White Basmati rice"
              netWeight="4.4 kg"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={atta}
              price="$18.99"
              name="Ashirwad multigrain atta"
              netWeight="9.8kg"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={fererro}
              price="$5.99"
              name="Fererro rocher premium chocolate"
              netWeight="300g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={chocolate}
              price="$4.99"
              name="Dairy Milk | Milk chocolate"
              netWeight="50g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={oliveoil}
              price="$29.99"
              name="Extra virgin olive oil"
              netWeight="2.0ltr"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={cookies}
              price="$2.99"
              name="Good day cookies | Pistachio flavour"
              netWeight="10g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={rice}
              price="$17.99"
              name="White Basmati rice"
              netWeight="4.4 kg"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={atta}
              price="$18.99"
              name="Ashirwad multigrain atta"
              netWeight="9.8kg"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={fererro}
              price="$5.99"
              name="Fererro rocher premium chocolate"
              netWeight="300g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={chocolate}
              price="$4.99"
              name="Dairy Milk | Milk chocolate"
              netWeight="50g"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <CardComponent
              src={oliveoil}
              price="$29.99"
              name="Extra virgin olive oil"
              netWeight="2.0ltr"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default ProductSlider2;
