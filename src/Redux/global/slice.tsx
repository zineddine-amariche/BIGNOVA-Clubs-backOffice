import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  showSideBarInformations: false,
  informations: false,
  sideBarType: false,
};

const globalSlice = createSlice({
  name: "globalS",
  initialState,
  reducers: {
    reset: (state) => {
      state.showSideBarInformations = false;
    },
    handleShowSidebar: (state, action) => {
      state.showSideBarInformations = action.payload;
    },
    handleGetSidebar: (state, action) => {
      state.informations = action.payload;
    },
    handleTypeSidebar: (state, action) => {
      state.sideBarType = action.payload;
    },
  },
});

export const { handleShowSidebar, handleTypeSidebar, handleGetSidebar, reset } =
  globalSlice.actions;
export default globalSlice.reducer;
