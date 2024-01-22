import React, { useState } from "react";
import { Badge, Box, Button, InputBase, Stack, useTheme } from "@mui/material";
import { createProjectHooks } from "../../Hooks/useCreateProject";
import { PrimaryText } from "../../../../../../typography";
import { Formik } from "formik";
import Space from "../../../../../../../Layouts/Space";
import InputFeilds from "../../../../../../Inputs/InputFeilds";
import SelectMenue from "../../../../../../DropDown/SelectMenue";
import PrimaryButton from "../../../../../../Button/PrimaryButton";
import { Person2Outlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

const options = [
  { value: 1, name: "En cours" },
  { value: 2, name: "Terminés" },
  { value: 3, name: "Futurs projets" },
];

const CreateProjectForm = () => {
  const theme = useTheme();

  const { initialState, validationSchema, onSubmit } = createProjectHooks();
  let isLoading = false;

  const [imageUrl, setImageUrl] = useState("");
  const shapeCircleStyles = { borderRadius: "50%" };
  const [Files, setFiles] = useState({});

  // console.log("imageUrl", imageUrl);
  const shapeStyles = {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ml: 1,
  };
  const mode = useSelector((state) => state.AppTheme.mode);

  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}>
      <Person2Outlined
        sx={{ fontSize: 60, color: theme.palette.primary.dark }}
      />
    </Box>
  );

  return (
    <Stack
      px={6}
      width={"100%"}
      borderRadius={2}
      mt={1}
      sx={{
        background: theme.palette.background.alt,
      }}
    >
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          let object = {
            ...values,
            Files,
          };

          onSubmit(object);
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
          const {
            name,
            address,
            headName,
            creationDate,
            phoneNumber,
            email,
            description,
          } = values;

          return (
            <Stack height={"100%"} style={{ flexGrow: 1, display: "flex" }}>
              {imageUrl ? (
                <Box
                  component={"img"}
                  src={imageUrl}
                  width="100px"
                  height="100px"
                  sx={{
                    borderRadius: "50%",
                    border: `2px solid ${theme.palette.secondary.light}`,
                    mb: 1,
                    alignSelf: "center",
                  }}
                />
              ) : (
                <>
                  <Badge overlap="circular">{circle}</Badge>
                </>
              )}

              <InputBase
                id="standard-basic"
                placeholder={"placeholder"}
                value={File}
                onChange={(event) => {
                  const file = event.target.files[0];
                  const imageUrl = URL.createObjectURL(file);
                  setImageUrl(imageUrl);

                  let filess = {
                    fieldname: "photo",
                    originalname: file.name,
                    encoding: "7bit",
                    mimetype: file.type,
                    destination: "photos",
                    filename: file.name,
                    path: `photos/${file.name}`,
                    size: file.size,
                  };
                  setFiles(filess);
                  setFieldValue("photo", imageUrl);
                }}
                sx={{
                  pl: "10px",
                  height: 40,
                  width: "100%",
                }}
                type="file"
              />
              {errors.photo && (
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"15px"}
                  text={"photo est requis "}
                  color={"#FF0000"}
                  cursor
                />
              )}
              <Space space={30} />

              <Stack
                width={"100%"}
                height={"100%"}
                style={{ flexGrow: 1 }}
                spacing={3}
                display="flex"
              >
                <InputFeilds
                  label={"Nom du club "}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  value={name}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"name"}
                  onBlur={() => {
                    setFieldTouched("name", true);
                  }}
                  margin
                  shrink={true}
                />

                <InputFeilds
                  label={"Président "}
                  error={errors.headName && touched.headName}
                  helperText={
                    errors.headName && touched.headName ? errors.headName : ""
                  }
                  value={headName}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"headName"}
                  onBlur={() => {
                    setFieldTouched("headName", true);
                  }}
                  margin
                  shrink={true}
                />

                <InputFeilds
                  label={"Date de création  "}
                  error={errors.creationDate && touched.creationDate}
                  helperText={
                    errors.creationDate && touched.creationDate
                      ? errors.creationDate
                      : ""
                  }
                  value={creationDate}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"creationDate"}
                  onBlur={() => {
                    setFieldTouched("creationDate", true);
                  }}
                  type="date"
                  shrink={true}
                />
                <InputFeilds
                  label={"Email "}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  value={email}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"email"}
                  onBlur={() => {
                    setFieldTouched("email", true);
                  }}
                  type="email"
                  shrink={true}
                />
                <InputFeilds
                  label={"N° téléphone "}
                  error={errors.phoneNumber && touched.phoneNumber}
                  helperText={
                    errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : ""
                  }
                  value={phoneNumber}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"phoneNumber"}
                  onBlur={() => {
                    setFieldTouched("phoneNumber", true);
                  }}
                  type="phoneNumber"
                  shrink={true}
                />

                <InputFeilds
                  label={"Adresse du siège "}
                  error={errors.address && touched.address}
                  helperText={
                    errors.address && touched.address ? errors.address : ""
                  }
                  value={address}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"address"}
                  onBlur={() => {
                    setFieldTouched("address", true);
                  }}
                  type="address"
                  shrink={true}
                />
              </Stack>

              <InputFeilds
                label={"Description "}
                error={errors.description && touched.description}
                helperText={
                  errors.description && touched.description
                    ? errors.description
                    : ""
                }
                value={description}
                onChange={handleChange}
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"description"}
                onBlur={() => {
                  setFieldTouched("description", true);
                }}
                margin
                shrink={true}
                rows={4}
                multiline
              />
              <Space space={30} />

              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.light,
                  fontSize: 17,
                  mt: 3,
                  paddingTop: 4,
                  alignSelf: "center",
                  position: "absolute",
                  bottom: 30,
                  width: "80%",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                startIcon={
                  isLoading ? (
                    <CircularProgress size={25} sx={{ p: "5px" }} />
                  ) : (
                    <Space space={0} />
                  )
                }
              >
                {!isLoading ? "AJOUTER" : ""}
              </Button>
            </Stack>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default CreateProjectForm;
