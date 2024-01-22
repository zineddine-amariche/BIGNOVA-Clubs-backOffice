import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import getClubByIdService from "./service";

export const listAdminById = createAsyncThunk(
  "admin/id",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await getClubByIdService.api(obj,token);
      if (res.status == 200) {
        onSuccessAction();
        return res.data;
      } else {
        onErrorAction();
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
