import { useDispatch } from "react-redux";
import * as Yup from "yup";

export function ModalHook() {

  const initialState = {
    argument: "",
  
  };

  const validationSchema = Yup.object().shape({
    argument: Yup.string().required("arguments est requis"),
   
  });

 

  return {
    initialState,
    validationSchema,
 
  };
}
