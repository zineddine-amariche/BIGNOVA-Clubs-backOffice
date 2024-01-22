import { createSlice } from "@reduxjs/toolkit";
import login from "./login/api";

const initialState = {
  result: null,
  isError: false,
  isLoading: false,
  isAuth: false,
  message: "",
  loader: false,
  update: null,
  role: null,
  token: null,
  id: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = [];
      state.isAuth = false;

    },

    getPermission: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
    },

    setUserInfoOnLogin: (state, action) => {
      state.user = action.payload;



    },
    loginTest: (state, action) => {
      state.isAuth = true;
      state.role = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isAuth = true;
        state.isLoading = false;
        state.message = "";
        state.isError = false;
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.id = action.payload.id;

      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.result = null;
      });
  },
});

export const { Logout, getPermission, setUserInfoOnLogin, loginTest } =
  loginSlice.actions;
export default loginSlice.reducer;
