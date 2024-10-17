/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

function ProductSlider({ heading }) {
  const [isDragging, setIsDragging] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    initialSlide: 0,
    adaptiveHeight: true,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
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
      <div className="container mx-auto my-10">
        <div>
          <h2 className="text-4xl">{heading}</h2>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="sm:my-10 sm:mx-20">
            {/* <Link to="/product"> */}
            <CardComponent
              isDragging={isDragging}
              // src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={cookies}
              price="$2.99"
              name="Good day cookies | Pistachio flavour"
              netWeight="10g"
            />
            {/* </Link> */}
            <CardComponent
              isDragging={isDragging}
              // src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
              src={rice}
              price="$17.99"
              name="White Basmati rice"
              netWeight="4.4 kg"
            />
            <CardComponent
              isDragging={isDragging}
              src={atta}
              price="$18.99"
              name="Ashirwad multigrain atta"
              netWeight="9.8kg"
            />
            <CardComponent
              isDragging={isDragging}
              src={fererro}
              price="$5.99"
              name="Fererro rocher premium chocolate"
              netWeight="300g"
            />
            <CardComponent
              isDragging={isDragging}
              src={chocolate}
              price="$4.99"
              name="Dairy Milk | Milk chocolate"
              netWeight="50g"
            />
            <CardComponent
              isDragging={isDragging}
              src={oliveoil}
              price="$29.99"
              name="Extra virgin olive oil"
              netWeight="2.0ltr"
            />
            <CardComponent isDragging={isDragging} />
            <CardComponent isDragging={isDragging} />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
