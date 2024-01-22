import {  createSlice } from "@reduxjs/toolkit";

 

 
const initialState = {
  isMainOpen: false,
  sidebar:false
};

const mainDrawerslice = createSlice({
  name: "drawers",
  initialState,
  reducers: {
    openMainDrawer: (state, action) => {
      state.isMainOpen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});

export const { openMainDrawer } = mainDrawerslice.actions;
export default mainDrawerslice.reducer;
