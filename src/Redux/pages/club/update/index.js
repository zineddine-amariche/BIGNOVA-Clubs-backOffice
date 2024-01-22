import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import updateClubService from "./service";

export const updateClub = createAsyncThunk(
  "club/update",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    try {
      let res = await updateClubService.api(obj);

      if (res.status == 201) {
        onSuccessAction("Club updated successfully");
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
