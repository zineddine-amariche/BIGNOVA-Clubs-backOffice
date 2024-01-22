import thunk from "redux-thunk";
import AppTheme from "./theme";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import auth from "./auth/slice";
import users from "./users/slice";
import globaleState from "./global/slice";
import clubSlice from "./pages/club/slice";
import adminSlice from "./pages/admins/slice";

const reducers = combineReducers({
  AppTheme,
  auth,
  users,
  globaleState,
  clubs: clubSlice,
  admins: adminSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
