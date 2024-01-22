import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getClubs } from "../../../../../Redux/pages/club/List";
import {  handleBanneModal, handleValidateModal } from "../../../../../Redux/pages/club/slice";

export function clubHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    image: "",
    description: "",
    dateDebut: "",
    dateFin: "",
  };

  let validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    image: Yup.string().required("image is required"),
    description: Yup.string().required("description is required"),
    dateDebut: Yup.string().required("Start date is required"),
    dateFin: Yup.string().required("End date is required"),
  });

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };
  const onSuccessAction = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  let object = {
    onSuccessAction,
    onErrorAction,
    // obj: data,
  };
  const fetchClubs = async (data) => {
    dispatch(getClubs());
  };
 
  const [hidePass, setHidePass] = useState(true);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  const handleClick = (cellValue) => {

    let object = {
      onSuccessAction,
      onErrorAction,
      fetchClubs,
      obj: { id: cellValue.row._id },
    };

    let objectCell = {
      cellValue:cellValue.row,
      value:true
    }

    if (cellValue.row._id === undefined) return;
    if (cellValue.row.status === "VALIDATED") {
      dispatch(handleBanneModal(objectCell))
    } else {
      dispatch(handleValidateModal(objectCell));

    }
  };

  return {
    initialState,
    validationSchema,
    HandlehidePass,
    hidePass,
    fetchClubs,
    handleClick,
  };
}
