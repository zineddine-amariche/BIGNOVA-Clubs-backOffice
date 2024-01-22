import { Box, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Head from "../../../../components/Layouts/Head";

const Abonnement = () => { 
 
  const theme = useTheme();
  const { t } = useTranslation();

  let title = t("sidebar.0.Abonnement")
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Head title={"Abonnement"} headerTitle={title} />
    </Box>
  );
};

export default Abonnement;
