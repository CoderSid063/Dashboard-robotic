import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setTokens: (state) => {
      state.isAuthenticated = true;
      console.log(state.isAuthenticated);
    },
    clearTokens: (state) => {
      state.isAuthenticated = false;
      console.log(state.isAuthenticated);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
