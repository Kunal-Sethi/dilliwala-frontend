/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  getCart,
  removeFromCart,
  removeProductFromCart,
} from "./cartThunkActions";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  cartLoading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetCart: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Get cart Slice
    builder
      .addCase(getCart.pending, (state) => {
        (state.cartLoading = true), (state.error = null);
      })
      .addCase(getCart.fulfilled, (state, action) => {
        (state.cartLoading = false),
          (state.cartItems = action.payload),
          (state.totalItems = action.payload?.data?.products?.reduce(
            (acc, item) => acc + Number(item.quantity),
            0
          )),
          (state.totalPrice = action.payload?.totalPrice);
      })
      .addCase(getCart.rejected, (state, action) => {
        (state.cartLoading = false), (state.error = action.payload);
      });

    //   Add to cart slice
    builder
      .addCase(addToCart.pending, (state) => {
        (state.cartLoading = true), (state.error = null);
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        (state.cartLoading = false),
          (state.cartItems = action?.payload),
          (state.totalItems = action.payload?.data?.products?.reduce(
            (acc, item) => acc + Number(item.quantity),
            0
          )),
          //   (state.totalPrice = action.payload?.data?.totalPrice);
          (state.totalPrice = action.payload?.totalPrice);
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        (state.cartLoading = false), (state.error = action.payload);
      });

    //   Remove from cart slice
    builder
      .addCase(removeFromCart.pending, (state) => {
        (state.cartLoading = true), (state.error = null);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        (state.cartLoading = false),
          (state.error = null),
          (state.cartItems = action.payload),
          (state.totalItems = action.payload?.data?.products?.reduce(
            (acc, item) => acc + Number(item.quantity),
            0
          )),
          (state.totalPrice = action.payload?.totalPrice);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        (state.cartLoading = false), (state.error = action.payload);
      });

    // Remove Product From Cart
    builder
      .addCase(removeProductFromCart.pending, (state) => {
        (state.cartLoading = true), (state.error = null);
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.cartLoading = false;
        (state.error = null),
          (state.cartItems = action.payload),
          (state.totalItems = action.payload?.data?.products?.reduce(
            (acc, item) => acc + Number(item.quantity),
            0
          )),
          (state.totalPrice = action.payload?.totalPrice);
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        (state.cartLoading = false), (state.error = action.payload);
      });
  },
});

export const { resetError, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
