import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import validateClubService from "./service";

export const validateClub = createAsyncThunk(
  "club/validate",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await validateClubService.api(obj,token);

      if (res.status == 201) {
        onSuccessAction();
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
