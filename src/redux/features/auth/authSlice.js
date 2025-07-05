/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { checkAuthStatus, loginUser, logoutUser } from "./authThunkActions.js";

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.userInfo = action.payload),
          (state.loading = false),
          (state.error = null),
          (state.isAuthenticated = true);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      (state.userInfo = null),
        (state.error = null),
        (state.isAuthenticated = false),
        (state.loading = false);
    });

    // Check Auth Status
    builder
      .addCase(checkAuthStatus.pending, (state) => {
        (state.userInfo = null),
          (state.error = null),
          (state.isAuthenticated = false),
          (state.loading = true);
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        (state.userInfo = action.payload),
          (state.loading = false),
          (state.isAuthenticated = true),
          (state.error = null);
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        (state.loading = false),
          (state.isAuthenticated = false),
          (state.error = null);
      });
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
