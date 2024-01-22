import { useDispatch, useSelector } from "react-redux";
import { getClubs } from "../../../../../Redux/pages/club/List";
import { handleValidateModal } from "../../../../../Redux/pages/club/slice";
import { validateClub } from "../../../../../Redux/pages/club/validate";
import { showError, showSuccess } from "../../../../../utils/toast.helper";

export function useValidateModal(handleCloseDrawer) {
  const dispatch = useDispatch();
  const { cellValue } = useSelector((state) => state.clubs);


  const onOpen = () => dispatch(handleValidateModal(true));
  const onClose = () => dispatch(handleValidateModal(false));

  const onSuccessAction = () => {
    onClose();
    showSuccess("Opération réussie");
    handleCloseDrawer()
    dispatch(getClubs());
  };

  const onErrorAction = () => {
    onClose();
    showError('Something went wrong')
  };

  const onSubmit = (argument) => {
    let object = {
      obj: { id:cellValue._id,argument },
      onSuccessAction,
      onErrorAction,
    };

    dispatch(validateClub(object));
  };

  return {
    onOpen,
    onClose,
    onSubmit,
  };
}
