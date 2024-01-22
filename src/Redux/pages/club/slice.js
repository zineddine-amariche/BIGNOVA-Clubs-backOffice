import { createSlice } from "@reduxjs/toolkit";
import { banneClub } from "./Banne";
import { createClub } from "./create";
import { deleteClub } from "./delete";
import { getClubs } from "./List";
import { listClubById } from "./listById";
import { updateClub } from "./update";
import { validateClub } from "./validate";

const initialState = {
  result: null,
  create: [],
  isError: false,
  isLoading: false,
  message: "",
  clubs: [],
  detailClub: [],
  showBanneModal: false,
  showDeleteModal: false,
  showValidateModal: false,
  cellValue: "",

};

const clubSlice = createSlice({
  name: "Clubs",
  initialState,
  reducers: {
    clearClub: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = [];
      state.isAuth = false;
    },
    handleBanneModal: (state, action) => {
      state.showBanneModal = action.payload;
      state.cellValue = action.payload.cellValue;

    },
    handleDeleteModal: (state, action) => {
      state.showDeleteModal = action.payload;
      state.cellValue = action.payload.cellValue;
    },
    handleValidateModal: (state, action) => {
      state.showValidateModal = action.payload;
      state.cellValue = action.payload.cellValue;
    },
 
  },

  extraReducers: (builder) => {
    builder

      .addCase(banneClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(banneClub.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(banneClub.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      })

      .addCase(createClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createClub.fulfilled, (state, action) => {
        state.create = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(createClub.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.create = [];
      })

      .addCase(deleteClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteClub.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(deleteClub.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      })

      .addCase(getClubs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClubs.fulfilled, (state, action) => {
        state.clubs = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getClubs.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.clubs = [];
      })

      .addCase(listClubById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listClubById.fulfilled, (state, action) => {
        state.detailClub = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(listClubById.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.detailClub = [];
      })

      .addCase(updateClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateClub.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(updateClub.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      })

      .addCase(validateClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateClub.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(validateClub.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.result = [];
      });
  },
});

export const { clearClub, handleBanneModal, handleDeleteModal,handleValidateModal } =
  clubSlice.actions;

export default clubSlice.reducer;
