/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/FullScreenLoader";
import { GoInfo } from "react-icons/go";
import { MdOutlineDeleteForever } from "react-icons/md";
import fererro from "../assets/fererro.jpeg";
import CartItem from "../components/cart/CartItem";
import { getCart } from "../redux/features/cart/cartThunkActions";
import InlineLoader from "../components/Loader/InlineLoader.jsx";

function Cart() {
  const { cartLoading, cartItems, totalItems, error } = useSelector(
    (state) => state.cart
  );

  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  // const totalItems = cartItems?.data?.products?.reduce((acc, item) => {
  //   return acc + Number(item.quantity);
  // }, 0);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const taxOnProducts = 0.13 * cartItems?.data?.totalPrice;

  if (loading) return <Loader />;

  return (
    <>
      {cartItems?.data?.products.length == 0 ? (
        <div className="grow my-5 flex justify-center items-center">
          <div>
            <div>
              <div className="text-center my-4">
                <h1 className="font-black text-4xl">Your Cart is empty</h1>
                <p className="text-sm">
                  Start adding items in cart to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grow my-5">
          <div>
            <div>
              <div className="text-center my-4">
                <h1 className="font-black text-4xl">Your Cart</h1>
                {/* <p className="text-gray-700">{`${cartItems?.data?.products.length} Products`}</p> */}
                <p className="text-gray-700">
                  {cartItems?.data?.products.length == 1
                    ? `${cartItems?.data?.products.length} Product`
                    : `${cartItems?.data?.products.length} Products`}
                </p>
              </div>
              <div className="p-4 flex justify-center items-start grow">
                <div className="me-2 mt-0.5">
                  <GoInfo size="18px" />
                </div>
                <p className="text-sm">
                  Prices are subject to change based on offers available at
                  pickup time. Your total and receipt will reflect any changes.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row p-4 gap-4">
              <div className="grow border-b-2">
                {cartLoading ? (
                  // <Loader />
                  <div className="flex flex-col items-center justify-center h-full bg-white">
                    <div className="w-12 md:w-24 h-12 md:h-24 mb-8 lg:mb-0 border-8 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  cartItems?.data?.products.map((cartDataItem, index) => (
                    <CartItem
                      id={cartDataItem.productId._id}
                      key={index}
                      itemName={cartDataItem.productId.name}
                      itemPrice={cartDataItem.productId.price}
                      itemDiscountedPrice={
                        cartDataItem?.productId?.discountedPrice
                      }
                      itemQuantity={cartDataItem.quantity}
                    />
                  ))
                )}
                {}
              </div>

              {/* Side sticky div for  */}
              <div className="sticky! top-0! lg:w-1/3  shadow-xl lg:block">
                <div className="bg-gray-200 p-4 text-start text-lg">
                  <h1>Order Summary</h1>
                </div>
                <div className="p-4">
                  <div className="flex justify-between border-b-2 pb-4">
                    <div>
                      <p className="text-lg text-slate-600">Sub Total</p>
                      <p className="text-xs text-slate-600">{`${totalItems} Items`}</p>
                    </div>
                    <div className="">
                      <p className="text-lg text-slate-600">{`${cartItems?.data?.totalPrice.toFixed(
                        2
                      )}`}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-sm text-slate-600">
                    Applicable fees will be shown at checkout.
                  </p>
                </div>
                <div className="p-4">
                  <div className="flex justify-between border-b-2 pb-4">
                    <div>
                      <p className="text-lg text-slate-600">Est. Taxes</p>
                    </div>
                    <div className="">
                      <p className="text-lg text-slate-600">
                        {taxOnProducts.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between border-b-2 pb-4">
                    <div>
                      <p className="text-xl font-black text-slate-600">
                        Est. Total
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xl font-black text-slate-600">{`${(
                        cartItems?.data?.totalPrice + taxOnProducts
                      ).toFixed(2)}`}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 mb-4 sticky bottom-5">
                  <button className="bg-black text-white text-lg font-black w-full p-4 rounded">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
