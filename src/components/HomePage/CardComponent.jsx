/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MilkDemoImage from "../../assets/milk_demo_image.jpeg";
import CarouselDemoImage from "../../assets/carousel_demo.webp";
import { Link } from "react-router-dom";

function CardComponent({
  src = "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
}) {
  return (
    <>
      <div className="rounded-xl relative">
        <button className="absolute bg-blue-200 hover:bg-blue-300 active:bg-blue-200 px-4 py-2 top-0 right-0 rounded-full text-lg">
          +
        </button>
        <Link to="/product">
          <div>
            {/* <a href="" className="flex flex-col"> */}
            <div
              className="flex-none px-5 pt-5"
              style={{ height: "250px", width: "250px" }}
            >
              <img
                // src={MilkDemoImage}
                // src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                src={src}
                className="object-contain"
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                alt=""
              />
            </div>
            <div className="flex-1 py-5 px-3">
              <p>$6.99</p>
              <h6>5% Milk (Pure Organic)</h6>
              <p>4L . 0.17 / 100g</p>
            </div>
          </div>
          {/* </a> */}
        </Link>
      </div>
      {/* <div className="card bg-base-100 w-auto shadow-xl">
        <figure>
          <img src={MilkDemoImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CardComponent;

// import MilkDemoImage from "../assets/milk_demo_image.jpeg";

// function CardComponent() {
//   return (
//     <>
//       <div className="bg-teal-400 flex flex-col gap-4 mx-4 w-[300px] max-h-[500px]">
//         <div className="flex-grow-[6]">
//           <img
//             src={MilkDemoImage}
//             className="h-[300px] w-full object-cover"
//             alt="Product Image"
//           />
//         </div>
//         <div className="flex-grow-[4] p-2">
//           <h4>$5.99</h4>
//           <div>
//             <h6>5% Milk (Pure Organic)</h6>
//             <p>4L . 0.17 / 100g</p>
//           </div>
//         </div>
//       </div>
//       {/* <div className="card bg-base-100 w-auto shadow-xl">
//         <figure>
//           <img src={MilkDemoImage} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Shoes!</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default CardComponent;
