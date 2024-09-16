/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import CarouselDemoImage from "../../assets/carousel_demo.webp";
import MilkDemoImage from "../../assets/milk_demo_image.jpeg";
import { scrollToTop } from "../../utils/scrollToTop";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    scrollToTop();
  });

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container sm:px-10">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        <div className="py-3 flex-important justify-center align-center max-h-96">
          <img
            src={CarouselDemoImage}
            className="max-h-96"
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="py-3 flex-important justify-center align-center max-h-96">
          <img
            src={MilkDemoImage}
            className="max-h-96"
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="py-3 flex-important justify-center align-center">
          <img src={CarouselDemoImage} className="max-h-96" alt="" />
        </div>
        <div className="py-3 flex-important justify-center align-center">
          <img src={CarouselDemoImage} className="max-h-96" alt="" />
        </div>
        <div className="py-3 flex-important justify-center align-center">
          <img src={CarouselDemoImage} className="max-h-96" alt="" />
        </div>
        <div className="py-3 flex-important justify-center align-center">
          <img src={CarouselDemoImage} className="max-h-96" alt="" />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
      >
        <div className="hover:cursor-pointer">
          <img src={CarouselDemoImage} className="max-h-10" alt="" />
        </div>
        <div className="flex-important justify-center">
          <img src={MilkDemoImage} className="max-h-10" alt="" />
        </div>
        <div className="hover:cursor-pointer">
          <img src={CarouselDemoImage} className="max-h-10" alt="" />
        </div>
        <div className="hover:cursor-pointer">
          <img src={CarouselDemoImage} className="max-h-10" alt="" />
        </div>
        <div className="hover:cursor-pointer">
          <img src={CarouselDemoImage} className="max-h-10" alt="" />
        </div>
        <div className="hover:cursor-pointer">
          <img src={CarouselDemoImage} className="max-h-10" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AsNavFor;
