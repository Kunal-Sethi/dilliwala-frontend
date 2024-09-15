/* eslint-disable react/prop-types */
import Slider from "react-slick";
import CarouselDemoImage from "../../assets/carousel_demo.webp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "5rem",
      }}
      onClick={onClick}
    />
  );
}

function FrontPageCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: false,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container mb-10">
        <Slider {...settings} className="w-full front-page-carousel">
          <div className="">
            <div className="flex flex-col sm:flex-row-reverse">
              <img src={CarouselDemoImage} className="sm:w-2/5" alt="" />
              <div
                className="sm:w-3/5 flex flex-col justify-center px-5 py-8 sm:px-24 md:px-32"
                style={{ backgroundColor: "rgb(246, 208, 0)" }}
              >
                <h2 className="text-4xl sm:text-3xl md:text-4xl">
                  {/* <h2 className="" style={{ fontSize: "2.5rem" }}> */}
                  This is heading sentence
                </h2>
                <p className="text-lg">This is paragrapth sentence</p>
                <div className="mt-3">
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    Go there.
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col sm:flex-row-reverse">
              <img src={CarouselDemoImage} className="sm:w-2/5" alt="" />
              <div
                className="sm:w-3/5 flex flex-col justify-center px-5 py-8 sm:px-24 md:px-32"
                style={{ backgroundColor: "rgb(246, 208, 0)" }}
              >
                <h2 className="text-4xl sm:text-3xl md:text-4xl">
                  {/* <h2 className="" style={{ fontSize: "2.5rem" }}> */}
                  This is heading sentence
                </h2>
                <p className="text-lg">This is paragrapth sentence</p>
                <div className="mt-3">
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    Go there.
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col sm:flex-row-reverse">
              <img src={CarouselDemoImage} className="sm:w-2/5" alt="" />
              <div
                className="sm:w-3/5 flex flex-col justify-center px-5 py-8 sm:px-24 md:px-32"
                style={{ backgroundColor: "rgb(246, 208, 0)" }}
              >
                <h2 className="text-4xl sm:text-3xl md:text-4xl">
                  {/* <h2 className="" style={{ fontSize: "2.5rem" }}> */}
                  This is heading sentence
                </h2>
                <p className="text-lg">This is paragrapth sentence</p>
                <div className="mt-3">
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    Go there.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default FrontPageCarousel;
