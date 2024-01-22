import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import createAdminService from "./service";

export const createAdmin = createAsyncThunk(
  "admin/create",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await createAdminService.api(obj,token);

      if (res.status == 201) {
        onSuccessAction("Admin Created successfully");
        return res.data.admins;
      } else {
        onErrorAction("Somthing went wrong.");
        return res.data;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const errorMessage = handleError(error);

      onErrorAction(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
