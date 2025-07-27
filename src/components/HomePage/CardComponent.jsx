/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MilkDemoImage from "../../assets/milk_demo_image.jpeg";
import CarouselDemoImage from "../../assets/carousel_demo.webp";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartThunkActions";

function CardComponent({
  src = "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  price = "$6.99",
  name = "5% Milk (Pure Organic)",
  netWeight = "4L . 0.17 / 100g",
  isDragging,
}) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(
        addToCart({
          productId: "67e88dbd0bd102b3400713f9",
          quantity: 1,
        })
      );
    } else {
      console.log("Coming in here");
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="rounded-xl relative group">
        <button
          className="absolute bg-blue-200 hover:bg-blue-300 active:bg-blue-200 px-4 py-2 top-0 right-0 rounded-full text-lg  transition-opacity duration-300"
          onClick={() => handleAddToCart()}
        >
          +
        </button>
        <Link onClick={handleClick} to="/product">
          <div>
            <div
              className="flex-none  pt-5"
              // style={{ height: "200px", width: "200px" }}
              style={{ height: "150px", width: "100%" }}
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
