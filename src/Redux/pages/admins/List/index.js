import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import { showError } from "../../../../utils/toast.helper";
import getAdminsService from "./service";

export const getAdmins = createAsyncThunk(
  "admin/all",
  async (object, thunkAPI) => {
    try {
      let res = await getAdminsService.api();
      if (res.status == 200) {
        return res.data;
      } else {
        showError("Somthing went wrong.")
        return res.data;
      }
    } catch (error) {
      const errorMessage = handleError(error);
      showError(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
