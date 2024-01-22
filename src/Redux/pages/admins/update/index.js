import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../../utils/errors.helper";
import updateClubService from "./service";

export const updateAdmin = createAsyncThunk(
  "admin/update",
  async (object, thunkAPI) => {
    const { obj, onSuccessAction, onErrorAction,onMount } = object;
    const { auth } = thunkAPI.getState();
    const token = auth.token;
    try {
      let res = await updateClubService.api(obj,token);
      if (res.status == 201) {

        let dataObject = {
          password: obj.password,  email: obj.email

        }
        onSuccessAction(dataObject);
        onMount(res.data.id)
        return res.data;
      } else {
        onErrorAction( );
        return res.data
      }
    } catch (error) {
      const { onErrorAction } = object;
      const errorMessage = handleError(error);

      onErrorAction(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
