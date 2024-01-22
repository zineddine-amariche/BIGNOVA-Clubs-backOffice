import { Box, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { clubHook } from "../../../pages/appStack/FIrst_Section/Club/Hooks/clubHook";
import { useBanneModal } from "../../../pages/appStack/FIrst_Section/Club/Hooks/useBanneModal";
import { useDeleteModal } from "../../../pages/appStack/FIrst_Section/Club/Hooks/useDeleteModal";
import { useValidateModal } from "../../../pages/appStack/FIrst_Section/Club/Hooks/useValidateModal ";

import CheckModal from "../../utils/Modal";
import ModalAdd from "../../utils/Modal/addItemsModel";
import { useTable } from "../../utils/Table/Hooks/useTable";
import Loader from "../Loader";

const LoaderPageTable = ({ Children, isLoading }) => {
  const theme = useTheme();

  return (
   
      isLoading ? (
        <Box
          width={"100%"}
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor:theme.palette.background.paper
          }}
        >
          <Loader color={theme.palette.primary.main} />
        </Box>
      ) : (
        <>
          <Children />
          <Modals />
        </>
      )
    
  );
};

export default LoaderPageTable;

const Modals = () => {
  const { showDeleteModal, showBanneModal, showValidateModal } = useSelector(
    (state) => state.clubs
  );

  return (
    <>
      {showDeleteModal ? <DeleteModal /> :null }
      {showBanneModal ? <BanneModal />:null }
      {showValidateModal ? <ValidateModal />:null }
    </>
  );
};

const DeleteModal = () => {
  const { handleCloseDrawer } = useTable();

  const { fetchClubs } = clubHook();
  const {  onClose, onSubmit } = useDeleteModal(fetchClubs,handleCloseDrawer);
  const { showDeleteModal } = useSelector((state) => state.clubs);

  return (
    <CheckModal
      visible={showDeleteModal}
      onClose={onClose}
      onSubmit={onSubmit}
      title={"Delete"}
      description={"Voulez vous vraiment supprimer ce club?"}
    />
  );
};

const BanneModal = () => {
  const { handleCloseDrawer } = useTable();

  const {  onClose, onSubmit } = useBanneModal(handleCloseDrawer);
  const { showBanneModal } = useSelector((state) => state.clubs);

  return (
    <ModalAdd
      visible={showBanneModal}
      onClose={onClose}
      onSubmit={onSubmit}
      title={"Bannir"}
      description={" Voulez vous bannir ce club? "}
    />
  );
};
const ValidateModal = () => {
  const { handleCloseDrawer } = useTable();

  const {  onClose, onSubmit } = useValidateModal(handleCloseDrawer);
  const { showValidateModal } = useSelector((state) => state.clubs);

  return (
    <ModalAdd
      visible={showValidateModal}
      onClose={onClose}
      onSubmit={onSubmit}
      title={"valider"}
      description={"Voulez vous valider ce club?"}
    />
  );
};
