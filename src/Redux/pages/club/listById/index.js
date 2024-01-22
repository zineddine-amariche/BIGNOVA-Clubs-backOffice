import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import getClubByIdService from "./service";

export const listClubById = createAsyncThunk(
  "club/id",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    try {
      let res = await getClubByIdService.api(obj);

      if (res.status == 201) {
        onSuccessAction("Club Created successfully");
        return res.data;
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
