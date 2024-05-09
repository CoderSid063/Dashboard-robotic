import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "datas",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      // console.log(action.payload.data);
      return action.payload.data;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
