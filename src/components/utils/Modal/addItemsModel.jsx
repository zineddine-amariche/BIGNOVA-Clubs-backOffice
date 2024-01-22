import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography, useTheme } from "@mui/material";
import { memo } from "react";
import FlexBetween from "../../Layouts/FlexBetween";
import Space from "../../Layouts/Space";
import { StyledButton } from "../Button/Button.component";
import { Formik } from "formik";
import { ModalHook } from "./hooks/ModalHooks";
import InputFeilds from "../Inputs/InputFeilds";

const ModalAdd = memo(({ onClose, visible, title, onSubmit }) => {
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
    borderRadius: 2,
  };

  const { initialState, validationSchema } = ModalHook();

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <ModelComponent /> */}
      <Box sx={styleWhite}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Veuillez saisir le motif pour {title} ce club !
        </Typography>
        <Space space={10} />

        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            onSubmit(values.argument);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => {
            const { argument } = values;
            return (
              <>
                <InputFeilds
                  label={"Motif"}
                  error={errors.argument && touched.argument}
                  helperText={
                    errors.argument && touched.argument ? errors.argument : ""
                  }
                  value={argument}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="text"
                  required={true}
                  id={"outlined-controlled"}
                  name={"argument"}
                  onBlur={() => {
                    setFieldTouched("argument", true);
                  }}
                />

                <Space space={30} />

                <FlexBetween style={{ gap: 30 }}>
                  <StyledButton type onClick={onClose}>
                    No
                  </StyledButton>
                  <StyledButton type={undefined} onClick={handleSubmit}>
                    yes
                  </StyledButton>
                </FlexBetween>
              </>
            );
          }}
        </Formik>
      </Box>
    </Modal>
  );
});

export default ModalAdd;
