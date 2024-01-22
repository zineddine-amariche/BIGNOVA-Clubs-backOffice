import { useDispatch, useSelector } from "react-redux";
import { deleteClub } from "../../../../../Redux/pages/club/delete";
import { handleDeleteModal } from "../../../../../Redux/pages/club/slice";
import { showError, showSuccess } from "../../../../../utils/toast.helper";

export function useDeleteModal(fetchClubs,handleCloseDrawer) {
  const dispatch = useDispatch();
  const { cellValue } = useSelector((state) => state.clubs);

  const onOpen = () => dispatch(handleDeleteModal(true));
  const onClose = () => dispatch(handleDeleteModal(false));


  

  const onSuccessAction = () => {
    onClose();
    showSuccess("Club deleted successfully");
    handleCloseDrawer()
    fetchClubs()
    
  };
  const onErrorAction = () => {
    onClose();
    showError("Something went wrong");
  };

  const onSubmit = () => {
    let object = {
      obj: { id: cellValue._id },
      onSuccessAction,
      onErrorAction,
    };
    if (cellValue._id) {
      dispatch(deleteClub(object));
    } else {
      return;
    }
  };

  return {
    onOpen,
    onClose,
    onSubmit,
  };
}
