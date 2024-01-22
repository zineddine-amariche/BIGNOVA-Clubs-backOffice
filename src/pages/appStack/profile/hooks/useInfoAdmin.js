import { useDispatch, useSelector } from "react-redux";
import { listAdminById } from "../../../../Redux/pages/admins/listById";
import { showError, showSuccess } from "../../../../utils/toast.helper";

export function useInfoAdmin() {
  const dispatch = useDispatch();


  const onSuccessAction = () => {
    showSuccess("Opération réussie");
  };
  const onErrorAction = () => {
    showError("Something went wrong");
  };

  const onMount = (id) => {
    let object = {
      obj: { id },
      onSuccessAction,
      onErrorAction,
    };
    if (id) {
      dispatch(listAdminById(object));
    } else {
      return;
    }
  };

  return {
    onMount,
  };
}
