import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@material-ui/icons/Edit";
import Space from "../../../components/Layouts/Space";
import EditProfile from "./formEditProfile";
import { useSelector } from "react-redux";
import Head from "../../../components/Layouts/Head";
import { useInfoAdmin } from "./hooks/useInfoAdmin";
import Layout from "../../../components/Layouts/LoaderPageTable";
import { useUpdateAdminInfo } from "./hooks/useUpdateAdminInfo";

const Profile = () => {
  const theme = useTheme();
 const {HandleIsUpdate} = useUpdateAdminInfo()
  const handleUpdate = () => {
    HandleIsUpdate()
  };
  const { id } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.admins);

  const { onMount } = useInfoAdmin();

  useEffect(() => {
    onMount(id);
  }, [id]);

  return (
    <>
      <Layout
        isLoading={isLoading}
        Children={() => {
          return (
            <>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: theme.palette.background.paper,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Head />
                <BodyInformations   handleUpdate={handleUpdate}   />
              </Box>
            </>
          );
        }}
      />
    </>
  );
};

export default Profile;

const BodyInformations = ({ handleUpdate }) => {
  const theme = useTheme();
  const { detailAdmin } = useSelector((state) => state.admins);
  const { isUpdate } = useSelector((state) => state.admins);

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.neutral.dark,
          }}
        >
          <CardHeader
            style={{
              color: theme.palette.background.default,
            }}
            title="Informations"
          ></CardHeader>
          <CardContent>
            <Stack
              flexDirection="row"
              paddingTop="15px"
              direction={{
                xs: "column",
                sm: "column",
                lg: "row",
                md: "column",
              }}
            >
              {isUpdate ?  (
                <EditProfile
        
                  handlClose={() => {
                     handleUpdate();
                  }}
                />
              ):(
                <Stack spacing={20} direction="row">
                  <Box style={{ paddingBottom: 15 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                      noWrap
                    >
                      Nom
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {detailAdmin?.firstName} {detailAdmin?.lastName}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Role
                    </Typography>
                    <Typography variant="body2">{detailAdmin?.role}</Typography>
                  </Box>

                  <Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Email
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {detailAdmin.email}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={500}
                      noWrap

                    >
                      Numero de telephone
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {detailAdmin.phone ? detailAdmin.phone : "Non renseigné"}
                    </Typography>
                  </Box>
                </Stack>
              ) }
            </Stack>
          </CardContent>
        </Card>
        <Space space={20} />

        {!isUpdate ? (
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            size="medium"
            style={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.primary.dark,

              float: "right",
            }}
            onClick={() => handleUpdate()}
          >
            Modifier
          </Button>
        ) : null}

        <Space space={20} />
      </Box>
    </>
  );
};
