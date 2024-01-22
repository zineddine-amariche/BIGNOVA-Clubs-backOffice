import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginTest } from "../../../../Redux/auth/slice";
import login from "../../../../Redux/auth/login/api";

export function authHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email requis")
      .min(8, "Email est petit , il faut au moin saisir 8 caractéres.")
      .matches(emailRegex, "Email non valide !"),
    password: Yup.string()
      .min(6, "Mot de passe trés petit, au moin 6 caractéres.")

      .required("Mot de passe requis"),
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
  const onSuccessAction = (message, dataObject) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("data", JSON.stringify(dataObject));

    let obj = {
      role: 1,
    };
    // dispatch(loginTest(obj));
    navigate("/dashboard");
  };

  const OnSubmit = async (data) => {
    let object = {
      onSuccessAction,
      onErrorAction,
      obj: data,
    };

    dispatch(login(object));
    // navigate("/dashboard");
  };

  const [hidePass, setHidePass] = useState(false);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  return {
    initialState,
    validationSchema,
    OnSubmit,
    HandlehidePass,
    hidePass,
  };
}
