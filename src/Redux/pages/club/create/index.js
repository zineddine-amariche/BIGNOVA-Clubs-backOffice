import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import createClubService from "./service";

export const createClub = createAsyncThunk(
  "club/create",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await createClubService.api(obj,token);

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
