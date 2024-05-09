import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const Store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default Store;
