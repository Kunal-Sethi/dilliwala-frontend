/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import CarouselDemoImage from "../assets/carousel_demo.webp";
import ProductDetailsCarousel from "../components/ProductDetails/ProductDetailsCarousel";
import { IoMdHeart } from "react-icons/io";
import CardComponent from "../components/HomePage/CardComponent";
import { useState } from "react";
import atta from "../assets/atta.png";
import fererro from "../assets/fererro.jpeg";
import chocolate from "../assets/chocolate.png";
import oliveoil from "../assets/oliveoil.png";

function ProductDetails() {
  const nutritionalInfo = {
    servingSize: "3.0 squares (30 g)",
    calories: 170,
    fat: { value: 12, dailyValue: 16 },
    saturates: { value: 7, dailyValue: 16 },
    trans: { value: 0.0, dailyValue: 0 },
    carbohydrate: { value: 14, dailyValue: 0 },
    sugars: { value: 9, dailyValue: 9 },
    fiber: { value: 4, dailyValue: 14 },
    protein: 3,
    cholesterol: 0,
    sodium: { value: 10, dailyValue: 1 },
    potassium: { value: 175, dailyValue: 4 },
    vitaminsAndMinerals: {
      calcium: { value: 30, dailyValue: 2 },
      iron: { value: 1.5, dailyValue: 8 },
      vitaminA: 0,
      vitaminC: 0,
    },
    ingredients: [
      "Cocoa Mass",
      "Sugar",
      "Cocoa Butter",
      "Vanilla Flavour",
      "May Contain: Peanuts, Tree Nuts, Soy, Milk, Sesame",
    ],
  };

  const [isDragging, setIsDragging] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="md:flex lg:flex-row flex-col justify-center items-center mt-20 sm:p-10 p-5">
          <div className="sm:w-full  lg:w-1/2 w-full">
            <ProductDetailsCarousel />
          </div>
          <div className="flex flex-col sm:w-full  lg:w-1/2 w-full">
            <div className="flex flex-col content-evenly">
              <h2 className="text-5xl text-orange-500 mt-10 sm:mt-0">
                Ultimate Maple Crème Cookies
              </h2>
              <p className="text-lg text-gray-500 my-1">300 g</p>
              <p className="text-3xl text-red-800 my-2">$1.88ea</p>
              <p className="text-md text-gray-500 my-1">$0.67/ 100g</p>
            </div>
            <div className="text-gray-800 mt-5 flex flex-col">
              <div className="flex mb-5">
                <button className="flex justify-center items-center bg-black text-white py-2 px-4 rounded-md w-1/2 mx-1">
                  Add to Wishlist
                  <IoMdHeart className="mx-2" size="20px" />
                </button>
                <button className="flex justify-center items-center bg-black text-white py-2 px-4 rounded-md w-1/2 mx-1">
                  Add to Cart
                  <IoMdHeart className="mx-2" size="20px" />
                </button>
                {/* <div className="flex align-center p-1 justify-between w-1/2 ms-5 border-2">
                  <div>
                    <button className="bg-black text-white py-2 px-4 rounded-md">
                      -
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span>1</span>
                  </div>
                  <div>
                    <button className="bg-black text-white py-2 px-4 rounded-md">
                      +
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <button className="bg-black text-white py-3 px-4 rounded-md">
              Add to Cart
            </button> */}
          </div>
        </div>

        {/* Product Description starts */}
        <div className="container px-20 mt-12 mx-auto">
          <hr className=" mx-auto border-1 border-black" />
        </div>
        <div className="sm:py-10 sm:px-20 p-5">
          <div>
            <h2 className="text-4xl mb-5">Product Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              varius bibendum finibus. Proin et molestie urna. Ut faucibus risus
              vulputate, malesuada eros nec, pulvinar sem. Duis tempus ut diam
              et porttitor. Ut lectus leo, hendrerit id volutpat ac, rhoncus et
              dui. Vestibulum bibendum finibus nibh a mollis. Aliquam erat
              volutpat. Aliquam interdum congue ipsum, et feugiat elit sagittis
              sit amet. Aliquam facilisis magna sapien, vitae congue nisl
              molestie a. Curabitur et congue tortor. Nunc id nibh nec dolor
              varius mollis sed at odio. Aenean accumsan augue mauris, id
              viverra erat ultricies quis.{" "}
            </p>
            <br />
            <p>
              Morbi maximus quis justo non aliquet. Sed nec venenatis enim, eget
              congue massa. Phasellus semper eros eu ipsum consectetur, quis
              consectetur diam pretium. Aliquam ullamcorper volutpat est, quis
              pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus tempor odio non ultrices tristique. Donec porta
              ligula sed ullamcorper fermentum. Cras vel pharetra diam, id
              laoreet nulla. Maecenas eu laoreet ligula, vel sagittis augue.
              Curabitur non elit tempor, posuere eros vitae, interdum nisl.
              Phasellus ac laoreet nisi. Fusce elementum felis sed nisl
              scelerisque pellentesque. Fusce pellentesque neque dui, vitae
              rhoncus turpis convallis ac. Nullam placerat pellentesque purus,
              et lobortis velit tristique ultrices.
            </p>
          </div>
        </div>
        {/* Product Description ends */}

        {/* Nutrition facts starts */}
        <div className="container px-20 mx-auto">
          <hr className=" mx-auto border-1 border-black" />
        </div>
        <div className="sm:py-10 sm:px-20 p-5">
          <div>
            <h2 className="text-4xl mb-5">Nutritional Facts</h2>
            {/* <p>
              Serving Size Per 5.0 oz (142 g) % Daily Value* Calories 100 cal
              Fat 0.2 g 0 % Saturates 0.1 g + Trans 0.0 g 0 % Polyunsaturates
              0.1 g Carbohydrate 26 g 9 % Sugars 22 g Fiber 1 g 4 % Other
              Carbohydrate 2.4 g Protein 1 g Potassium 250 mg 6 % Cholesterol 0
              mg Sodium 3 mg 0 % % Daily Value* Vitamin A 0 % Vitamin C 6 %
              Calcium 2 % Iron 6 % Vitamin K 20 % Thiamine 8 % Riboflavin 8 %
              Niacin 6 % Vitamin B6 6 % Phosphorus 2 % Magnesium 2 %
            </p> */}

            <div className="flex justify-center my-10">
              <div className="flex w-3/5 bg-white border border-gray-300 p-6 space-x-8">
                {/* Nutrition Facts Section */}
                <div className="flex-1">
                  {/* <h2 className="text-2xl font-bold mb-2">Nutrition Facts</h2> */}
                  <p className="font-semibold mb-4">
                    Serving Size: {nutritionalInfo.servingSize}
                  </p>
                  <hr className="border-t-2 border-black mb-4" />
                  <div className="text-xl font-bold mb-4">
                    Calories {nutritionalInfo.calories} cal
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Fat {nutritionalInfo.fat.value} g
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.fat.dailyValue} %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pl-4">
                          Saturates {nutritionalInfo.saturates.value} g + Trans{" "}
                          {nutritionalInfo.trans.value} g
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.saturates.dailyValue} %
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Carbohydrate {nutritionalInfo.carbohydrate.value} g
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.carbohydrate.dailyValue} %
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 pl-4">
                          Sugars {nutritionalInfo.sugars.value} g
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.sugars.dailyValue} %
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 pl-4">
                          Fiber {nutritionalInfo.fiber.value} g
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.fiber.dailyValue} %
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Protein {nutritionalInfo.protein} g
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Cholesterol {nutritionalInfo.cholesterol} mg
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Sodium {nutritionalInfo.sodium.value} mg
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.sodium.dailyValue} %
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 font-bold">
                          Potassium {nutritionalInfo.potassium.value} mg
                        </td>
                        <td className="text-right">
                          {nutritionalInfo.potassium.dailyValue} %
                        </td>
                      </tr>
                      {Object.entries(nutritionalInfo.vitaminsAndMinerals).map(
                        ([key, { value, dailyValue }]) => (
                          <tr key={key} className="border-b">
                            <td className="py-1 font-bold">
                              {key.replace(/([A-Z])/g, " $1").trim()} {value} mg
                            </td>
                            <td className="text-right">{dailyValue} %</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  <hr className="border-t-2 border-black mt-4 mb-2" />
                  <p className="text-xs text-gray-600">
                    *5% or less is a little, 15% or more is a lot
                  </p>
                </div>

                {/* Ingredients Section */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                  <p className="text-sm text-gray-700">
                    {nutritionalInfo.ingredients.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nutrition facts ends */}

        <div className="container px-20 mx-auto">
          <hr className=" mx-auto border-1 border-black" />
        </div>

        {/* Disclaimer Starts */}
        <div className="sm:py-10 sm:px-20 p-5">
          <div>
            <h2 className="text-4xl mb-5">Disclaimer</h2>
            <p>
              We do our best to provide accurate information regarding
              ingredients, nutritional details, product images, and descriptions
              on our app/website. However, as manufacturers may update this
              information at any time, we strongly advise you to always check
              the product packaging for the latest and most accurate details on
              ingredients, nutrition, or other product information (including
              warnings) before using or consuming any items. If you have food
              allergies or sensitivities, please review the actual product
              packaging to ensure the product's safety for your needs. Do not
              rely solely on the information provided on this app/website.
            </p>
          </div>
        </div>
        {/* Disclaimer Ends */}

        <div className="container px-20 mx-auto">
          <hr className=" mx-auto border-1 border-black" />
        </div>

        {/* Related Items starts */}
        <div className="mb-24">
          <div>
            <h2 className="sm:py-10 sm:px-20 p-5 text-4xl mb-5">
              Related Items
            </h2>
          </div>
          <div className="flex justify-center md:w-full lg:w-4/5 overflow-x-auto mx-auto">
            <div className="md:w-1/4">
              <CardComponent
                isDragging={isDragging}
                src={atta}
                price="$18.99"
                name="Ashirwad multigrain atta"
                netWeight="9.8kg"
              />
            </div>
            <div className="md:w-1/4">
              <CardComponent
                isDragging={isDragging}
                src={fererro}
                price="$5.99"
                name="Fererro rocher premium chocolate"
                netWeight="300g"
              />
            </div>
            <div className="md:w-1/4">
              <CardComponent
                isDragging={isDragging}
                src={chocolate}
                price="$4.99"
                name="Dairy Milk | Milk chocolate"
                netWeight="50g"
              />
            </div>
            <div className="md:w-1/4">
              <CardComponent
                isDragging={isDragging}
                src={oliveoil}
                price="$29.99"
                name="Extra virgin olive oil"
                netWeight="2.0ltr"
              />
            </div>
          </div>
        </div>
        {/* Related Items ends */}
      </div>
    </>
  );
}

export default ProductDetails;
