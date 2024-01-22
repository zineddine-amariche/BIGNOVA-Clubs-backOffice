import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import { showError } from "../../../../utils/toast.helper";
import getClubsService from "./service";

export const getClubs = createAsyncThunk(
  "clubs/all",
  async (object, thunkAPI) => {
    // const { onSuccessAction, onErrorAction } = object;
    try {
      let res = await getClubsService.api();
 

      if (res.status == 200) {
        // onSuccessAction("success");

        return res.data;
      } else {
        // onErrorAction("Somthing went wrong.");
        showError("Somthing went wrong.")
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
