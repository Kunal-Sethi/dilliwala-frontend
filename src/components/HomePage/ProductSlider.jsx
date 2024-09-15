/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CardComponent from "./CardComponent";

function ProductSlider({ heading }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto my-24">
        <div>
          <h2 className="text-4xl">{heading}</h2>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="sm:my-10 sm:mx-20">
            {/* <Link to="/product"> */}
            <CardComponent src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            {/* </Link> */}
            <CardComponent src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
