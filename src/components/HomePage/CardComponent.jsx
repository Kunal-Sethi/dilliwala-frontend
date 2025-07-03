/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MilkDemoImage from "../../assets/milk_demo_image.jpeg";
import CarouselDemoImage from "../../assets/carousel_demo.webp";

import { Link } from "react-router-dom";

function CardComponent({
  src = "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  price = "$6.99",
  name = "5% Milk (Pure Organic)",
  netWeight = "4L . 0.17 / 100g",
  isDragging,
}) {
  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="rounded-xl relative group">
        <button className="absolute bg-blue-200 hover:bg-blue-300 active:bg-blue-200 px-4 py-2 top-0 right-0 rounded-full text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          +
        </button>
        <Link onClick={handleClick} to="/product">
          <div>
            <div
              className="flex-none  pt-5"
              style={{ height: "200px", width: "200px" }}
            >
              <img
                src={src}
                className="object-contain"
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt=""
              />
            </div>
            <div className="flex-1 py-5 px-3">
              <p className="text-red-500 font-bold">{price}</p>
              <h6 className="text-wrap">{name}</h6>
              <p>{netWeight}</p>
            </div>
          </div>
          {/* </a> */}
        </Link>
      </div>
    </>
  );
}

export default CardComponent;
