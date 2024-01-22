import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material";
import Space from "../../Layouts/Space";
import FlexBetween from "../../Layouts/FlexBetween";
import { StyledButton } from "../Button/Button.component";

export default function CheckModal({ visible, onClose, title,onSubmit,description }) {
  const theme = useTheme();

  const styleWhite = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: `.2px solid ${theme.palette.primary.dark}`,
    boxShadow: 24,
    p: 4,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.alt,
    borderRadius:2
  };
  return (
    <div>
      <Modal
        open={visible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleWhite}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Avertissement
          </Typography>
          <Space space={10} />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Space space={30} />

          <FlexBetween style={{ gap: 30 }}>
            <StyledButton type onClick={onClose}>
              No
            </StyledButton>
            <StyledButton type={undefined} onClick={onSubmit}>
              yes
            </StyledButton>
          </FlexBetween>
        </Box>
      </Modal>
    </div>
  );
}
