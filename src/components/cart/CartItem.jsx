/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdOutlineDeleteForever } from "react-icons/md";
import fererro from "../../assets/fererro.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCart,
  removeFromCart,
  removeProductFromCart,
} from "../../redux/features/cart/cartThunkActions";
import InlineLoader from "../Loader/InlineLoader";

function CartItem({
  id,
  itemName,
  itemPrice,
  itemQuantity,
  itemDiscountedPrice = null,
}) {
  const dispatch = useDispatch();

  const handleAddToCartClick = async () => {
    await dispatch(addToCart({ productId: id, quantity: 1 }));
    await dispatch(getCart());
  };

  const handleRemoveFromCartClick = async () => {
    await dispatch(removeFromCart({ productId: id, quantity: 1 }));
    await dispatch(getCart());
  };

  const handleRemoveProductFromCartClick = async () => {
    await dispatch(removeProductFromCart({ productId: id }));
    await dispatch(getCart());
  };
  return (
    <>
      <div className="w-full flex border-t-2">
        <div className="flex flex-col p-1">
          <div className="max-w-24">
            <img src={fererro} alt="product_image" />
          </div>
          <div className="flex justify-center items-center md:hidden cursor-pointer">
            <MdOutlineDeleteForever size="18px" />
            <p
              className="text-sm text-slate-600 font-bold ms-1"
              onClick={() => handleRemoveProductFromCartClick()}
            >
              Remove
            </p>
          </div>
        </div>
        <div className="w-full p-2 flex flex-col md:flex-row justify-center md:justify-evenly  lg:mt-3">
          <div className="md:w-1/3 mb-3">
            <p className="text-sm text-slate-600 font-medium">
              {/* {itemName} */}
              {itemName}
            </p>
            <p
              className={`text-sm text-slate-600 font-medium ${
                itemDiscountedPrice && "line-through"
              }`}
            >{`$${itemPrice} each`}</p>
            {itemDiscountedPrice && (
              <p className="text-sm text-red-600 font-medium">{`$${itemDiscountedPrice} each`}</p>
            )}
          </div>

          {/* Small screen layout */}
          <div className="flex justify-between md:hidden">
            <div className="flex justify-center items-center w-2/3 md:w-1/3">
              <div
                className="border border-1 px-2 rounded bg-black text-white"
                onClick={() => handleRemoveFromCartClick()}
              >
                <span>-</span>
              </div>
              <div className="grow text-center border border-1 rounded mx-1">
                {/* <span>{itemQuantity}</span> */}
                <span>{itemQuantity}</span>
              </div>
              <div
                className="border border-1 px-2 rounded bg-black text-white"
                onClick={() => handleAddToCartClick()}
              >
                <span>+</span>
              </div>
            </div>
            <div>
              {itemDiscountedPrice ? (
                <p className="text-lg text-red-600 font-black">{`$${(
                  Number(itemDiscountedPrice) * Number(itemQuantity)
                ).toFixed(2)}`}</p>
              ) : (
                <p className="text-lg font-black">{`$${(
                  Number(itemPrice) * Number(itemQuantity)
                ).toFixed(2)}`}</p>
              )}
            </div>
          </div>

          {/* Middle and large screens layout */}
          <div className="hidden md:flex md:flex-col md:w-1/3 px-4">
            <div className="flex mb-3">
              <div
                className="cursor-pointer border border-1 px-2 rounded bg-black text-white"
                onClick={() => handleRemoveFromCartClick()}
              >
                <span>-</span>
              </div>
              <div className="grow text-center border border-1 rounded mx-1">
                <span>{itemQuantity}</span>
              </div>
              <div
                className="cursor-pointer border border-1 px-2 rounded bg-black text-white"
                onClick={() => handleAddToCartClick()}
              >
                <span className="">+</span>
              </div>
            </div>
            <div className="flex cursor-pointer">
              <MdOutlineDeleteForever size="18px" />
              <p
                className="cursor-pointer text-sm text-slate-600 font-bold ms-1"
                onClick={() => handleRemoveProductFromCartClick()}
              >
                Remove
              </p>
            </div>
          </div>
          <div className="px-4 hidden md:flex">
            {itemDiscountedPrice ? (
              <p className="text-lg text-red-600 font-black">{`$${(
                Number(itemDiscountedPrice) * Number(itemQuantity)
              ).toFixed(2)}`}</p>
            ) : (
              <p className="text-lg font-black">{`$${(
                Number(itemPrice) * Number(itemQuantity)
              ).toFixed(2)}`}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
