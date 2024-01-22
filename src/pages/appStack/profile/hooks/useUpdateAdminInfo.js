import { useDispatch, useSelector } from "react-redux";
import { handleisUpdate } from "../../../../Redux/pages/admins/slice";
import { updateAdmin } from "../../../../Redux/pages/admins/update";
import { showError, showSuccess } from "../../../../utils/toast.helper";

export function useUpdateAdminInfo(onMount) {
  const dispatch = useDispatch();

  const { isUpdate } = useSelector((state) => state.admins);



  const onSuccessAction = (dataObject) => {
    showSuccess("Mise à jour réussie");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("data", JSON.stringify(dataObject));
  };
  const onErrorAction = () => {
    showError("Something went wrong");
  };

  const onUpdateAdmin = (obj) => {
    let object = {
      obj,
      onSuccessAction,
      onErrorAction,
      onMount
    };
    if (obj) {
      dispatch(updateAdmin(object));
    } else {
      return;
    }
  };

  const HandleIsUpdate = () => {
    dispatch(handleisUpdate(!isUpdate));
  };

  return {
    onUpdateAdmin,
    HandleIsUpdate
  };
}
