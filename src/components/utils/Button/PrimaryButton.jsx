import { AddCircle } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";

const PrimaryButton = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { handleShowSidebar, handleTypeSidebar, onClick,add } = props;

  return (
    <Button
      startIcon={<AddCircle />}
      onClick={() => {
        if (add) {
          dispatch(handleTypeSidebar(true));
          dispatch(handleShowSidebar(true));
        } else {
          onClick();
        }
      }}
      sx={{
        color: theme.palette.neutral.contrastText,
        bgcolor: theme.palette.primary.light,
        "&:hover": {
          color: theme.palette.neutral.contrastText,
          bgcolor: theme.palette.primary.light,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
