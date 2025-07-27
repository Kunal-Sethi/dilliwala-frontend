/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// GET_CART Thunk
const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/cart/get-cart`, {
        method: "GET",
        // headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ADD_TO_CART Thunk
const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/cart/add-to-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
        credentials: "include",
      });

      const data = await res.json();
      //   console.log(
      //     "Data from Thunk",
      //     data.data.products.find((item) => item.productId == productId)
      //   );

      if (!res.ok) {
        return rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// REMOVE_FROM_CART
const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/cart/remove-from-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// REMOVE_PRODUCT_FROM_CART
const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/cart/remove-product-from-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export { getCart, addToCart, removeFromCart, removeProductFromCart };
