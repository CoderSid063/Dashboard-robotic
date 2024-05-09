import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";

const Store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default Store;
