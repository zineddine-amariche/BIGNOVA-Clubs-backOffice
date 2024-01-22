import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import BanneClubService from "./service";
 
export const banneClub = createAsyncThunk(
  "club/banne",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await BanneClubService.api(obj,token);

      if (res.status == 201) {
        onSuccessAction();
        return res.data;
      } else {
        return res.data;
      }
    } catch (error) {
      console.log('error', error)

      const { onErrorAction } = object;
      const errorMessage = handleError(error);
      console.log('errorMessage', errorMessage)

      onErrorAction(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
