import { createSlice } from "@reduxjs/toolkit";
import { createAdmin } from "./create";
import { deleteAdmin } from "./delete";
import { getAdmins } from "./List";
import { listAdminById } from "./listById";
import { updateAdmin } from "./update";

const initialState = {
  admins: [],
  create: [],
  detailAdmin: [],
  result: null,
  isError: false,
  isLoading: false,
  message: "",
  showDeleteModal: false,
  cellValue: "",
  isUpdate: false,
};

const adminSlice = createSlice({
  name: "Admins",
  initialState,
  reducers: {
    clearAdmin: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.admins= [],
      state.isAuth = false;
    },

    handleDeleteModal: (state, action) => {
      state.showDeleteModal = action.payload;
      state.cellValue = action.payload.cellValue;
    },

    handleisUpdate: (state, action) => {
      state.isUpdate = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder

      .addCase(createAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.create = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.create = [];
      })

      .addCase(deleteAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(deleteAdmin.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      })

      .addCase(getAdmins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.admins = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAdmins.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.admins = [];
      })

      .addCase(listAdminById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listAdminById.fulfilled, (state, action) => {
        state.detailAdmin = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(listAdminById.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.detailAdmin = [];
      })

      .addCase(updateAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isUpdate = false;
        state.message = "";
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      });
  },
});

export const { clearAdmin,handleUpdateModal,handleisUpdate, handleDeleteModal } = adminSlice.actions;

export default adminSlice.reducer;
