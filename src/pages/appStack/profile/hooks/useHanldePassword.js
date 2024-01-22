import { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export function useHanldePasswords() {
  const { detailAdmin } = useSelector((state) => state.admins);

  const [HidePassword, setHidePassword] = useState(false);
  const [HideConfirmPassword, setHideConfirmPassword] = useState(false);

  const HandlePassword = () => {
    setHidePassword(!HidePassword);
  };
  const HandleConfirmPassword = () => {
    setHideConfirmPassword(!HideConfirmPassword);
  };

  const initialValues = {
    nom: detailAdmin.firstName ? detailAdmin.firstName : "",
    prenom: detailAdmin.lastName ? detailAdmin.lastName : "",
    email: detailAdmin.email ? detailAdmin.email : "",
    role: detailAdmin.role ? detailAdmin.role : "",
    tel: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required("Nom est obligatoire"),
    prenom: Yup.string().required("Prenom est obligatoire"),
    tel: Yup.string().required("Numéro téléphone est obligatoire"),
    email: Yup.mixed().required("Email est obligatoire"),
    password: Yup.string().min(
      4,
      "Le mot de passe est trop court - doit comporter au moins 4 caractères."
     
    ).required("le mot de passe est obligatoire"),

    // confirm Password and its validations
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      )
      .required("Confirmer le mot de passe est obligatoire"),
  });

  return {
    HandlePassword,
    HandleConfirmPassword,
    HidePassword,
    HideConfirmPassword,
    initialValues,
    validationSchema,
  };
}
