import React from "react";
import { Box, Grid, Stack, useTheme } from "@mui/material";
import { Formik } from "formik";
import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import Space from "../../../../components/Layouts/Space";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import RowBox from "../../../../components/Layouts/RowBox";
import SendIcon from "@mui/icons-material/Send";
import { useUpdateAdminInfo } from "../hooks/useUpdateAdminInfo";
import { useHanldePasswords } from "../hooks/useHanldePassword";
import { useInfoAdmin } from "../hooks/useInfoAdmin";

const EditProfile = ({ handlClose }) => {
  const theme = useTheme();
  const { onMount } = useInfoAdmin();
  const {
    HandlePassword,
    HandleConfirmPassword,
    HidePassword,
    HideConfirmPassword,
    validationSchema,
    initialValues,
  } = useHanldePasswords();
  const { onUpdateAdmin } = useUpdateAdminInfo(onMount);
  return (
 
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            color: theme.palette.neutral.dark,
          }}
          spacing={2}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);

              let data = {
                firstName: values.nom,
                lastName: values.prenom,
                email: values.email,
                // role: values.role,
                phoneNumber: values.tel,
                password: values.password,
                confirmPassword : values.confirmPassword
              };
               onUpdateAdmin(data)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => {

              return (
                <>
                  <RowBox>
                    <InputFeilds
                      name="nom"
                      label={"Nom"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nom}
                      id="nom"
                      required={true}
                      error={errors.nom && touched.nom}
                      helperText={errors.nom && touched.nom ? errors.nom : ""}
                    />
                    <InputFeilds
                      name="prenom"
                      label={"Prenom"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.prenom}
                      id="prenom"
                      required={true}
                      error={errors.prenom && touched.prenom}
                      helperText={
                        errors.prenom && touched.prenom ? errors.prenom : ""
                      }
                    />
                  </RowBox>

                  <RowBox>
                    <InputFeilds
                      name="email"
                      label={"Email"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email"
                      required={true}
                      error={errors.email && touched.email}
                      helperText={
                        errors.email && touched.email ? errors.email : ""
                      }
                    />

                    <InputFeilds
                      name="tel"
                      label={"N° téléphone "}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tel}
                      id="tel"
                      required={true}
                      error={errors.tel && touched.tel}
                      helperText={errors.tel && touched.tel ? errors.tel : ""}
                    />
                  </RowBox>

                  <RowBox>
                    <InputFeilds
                      name="password"
                      label={"mot de passe"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      id="password"
                      required={true}
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : ""
                      }
                      secureTextEntry={HidePassword ? true : false}
                      type={HidePassword ? "text" : "password"}
                      hidePass={HidePassword}
                      HandlehidePass={HandlePassword}
                    />

                    <InputFeilds
                      name="confirmPassword"
                      label={"confirmer mot de passe "}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      id="confirmPassword"
                      required={true}
                      error={errors.confirmPassword && touched.confirmPassword}
                      helperText={
                        errors.confirmPassword && touched.confirmPassword
                          ? errors.confirmPassword
                          : ""
                      }
                      secureTextEntry={HideConfirmPassword ? true : false}
                      type={HideConfirmPassword ? "text" : "password"}
                      hidePass={HideConfirmPassword}
                      HandlehidePass={HandleConfirmPassword}
                    />
                  </RowBox>
                  <RowBox>
                    <Box />
                  </RowBox>
                  <Space space={20} />

                  <Box style={{ alignSelf: "flex-end" }}>
                    <Button
                      variant="contained"
                      endIcon={<CloseIcon />}
                      size="medium"
                      onClick={handlClose}
                      style={{
                        backgroundColor: theme.palette.error.main,
                        color: theme.palette.background.default,
                      }}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      size="medium"
                      style={{
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.background.default,
                      }}
                      type="submit"
                      sx={{ marginLeft: 2 }}
                      onClick={handleSubmit}
                    >
                      Valider
                    </Button>
                  </Box>
                </>
              );
            }}
          </Formik>
        </Stack>
 
  );
};

export default EditProfile;
