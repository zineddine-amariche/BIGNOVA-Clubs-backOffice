import { createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "./serviceLogin";

 const login = createAsyncThunk(
  "auth/login",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    try {
      let res = await loginService.api(obj);
      if (res.status == 200) {
        onSuccessAction("Connection completed successfully", obj);
        return res.data;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      console.log("message --- ", message);

      if (message == "Network Error") {
        onErrorAction(message);
      }
      onErrorAction(
        message.status ? message.status : "Error" + "  : " + message.error
      );
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export default login;