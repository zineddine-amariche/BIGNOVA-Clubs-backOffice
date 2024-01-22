import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import deleteAdminService from "./service";

export const deleteAdmin = createAsyncThunk(
  "admin/delete",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await deleteAdminService.api(obj,token);
      if (res.status == 201) {
        onSuccessAction();
        return res;
      } else {
        onErrorAction();
        return res;
      }
    } catch (error) {
      const { onErrorAction } = object;
      const errorMessage = handleError(error);

      onErrorAction(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
