import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../../../components/utils/Table";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { handleExportClick } from "../../../utils/export.xl.helper";
import { adminHook } from "./Hooks/adminHook";

const Admins = () => {
  const { isLoading,admins } = useSelector((state) => state.admins);

  const theme = useTheme();

  const { t } = useTranslation();

  let title = t("sidebar.0.Admins");
  const { fetchAdmins } = adminHook();


  useEffect(() => {
    fetchAdmins();
  }, []);


  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Table
        dataTable={admins}
        isLoading={isLoading}
        headerTitle={title}
        title={"Admins"}
        onClick={handleExportClick}
      />
    </Box>
  );
};

export default Admins;
