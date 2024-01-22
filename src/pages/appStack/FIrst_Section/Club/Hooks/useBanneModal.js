import { useDispatch, useSelector } from "react-redux";
import { banneClub } from "../../../../../Redux/pages/club/Banne";
import { getClubs } from "../../../../../Redux/pages/club/List";
import { handleBanneModal } from "../../../../../Redux/pages/club/slice";
import { showError, showSuccess } from "../../../../../utils/toast.helper";

export function useBanneModal(handleCloseDrawer) {
  const dispatch = useDispatch();

  const {cellValue} = useSelector(state => state.clubs)
  
  const onOpen = () => dispatch(handleBanneModal(true));
  const onClose = () => dispatch(handleBanneModal(false));
 
  const onSuccessAction = () => {
    onClose();
    showSuccess("Opération réussie");
    dispatch(getClubs());
    handleCloseDrawer()
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

    dispatch(banneClub(object));
  };

  return {
    onOpen,
    onClose,
    onSubmit,
  };
}
