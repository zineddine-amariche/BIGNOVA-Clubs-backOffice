import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createClub } from "../../../../../../../Redux/pages/club/create";
import { useTable } from "../../../../Hooks/useTable";

export function createProjectHooks() {
  const dispatch = useDispatch();

  const initialState = {
    name: "CRB",
    headName: "GBH",
    description: "TSEC IN DEV 2023",
    creationDate: "30/07/2023",
    phoneNumber: "0773820633",
    email: "Aza@gmail.com",
    address: "cite alg bhUST",
    etat: 1,
    photo:""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nom du club est requis"),
    headName: Yup.string().required("Président est requis"),
    description: Yup.string().required("Description est requis"),
    creationDate: Yup.string().required("Date de création est requis"),
    phoneNumber: Yup.string().required("N° téléphone est requis"),
    email: Yup.string().required("Email est requis"),
    address: Yup.string().required("Adresse du siège est requis"),
    etat: Yup.string().required("Status est requis"),
    photo: Yup.string().required("photo est requis"),
  });

  const { handleCloseDrawer } =useTable()

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
    handleCloseDrawer()
  };

  const onSubmit = async (values,handleClose) => {

    let object = {
      obj: values,
      onSuccessAction,
      onErrorAction,
      handleClose
    };
    dispatch(createClub(object));

  };

  const onDelete = async (values) => {
    const { id } = values;

    let object = {
      obj: id,
      onSuccessAction,
      onErrorAction,
    };
    // await dispatch(DeleteLot(object));
    // Handle success case
    console.log("delete project");
  };

  return {
    initialState,
    validationSchema,
    onSubmit,
    onDelete,
  };
}
