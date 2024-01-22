import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getAdmins } from "../../../../Redux/pages/Admins/List";

export function adminHook() {
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
    title: Yup.string()
      .required("title is required"),
    image: Yup.string().required("image is required"),
    description: Yup.string().required("description is required"),
    dateDebut: Yup.string().required("Start date is required"),
    dateFin: Yup.string().required("End date is required"),
  });

  const onErrorAction = () => {
    
  };
  const onSuccessAction = () => {
    
  };

 

  const fetchAdmins = async (data) => {
    dispatch(getAdmins());
  };
 
  return {
    fetchAdmins
  };
}
