import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../../../../components/utils/Table";
import { useTranslation } from "react-i18next";
import { handleExportClick } from "../../../../utils/export.xl.helper";
import { clubHook } from "./Hooks/clubHook";

const Club = () => {
  const theme = useTheme();
  const { isLoading, clubs, } = useSelector((state) => state.clubs);

  const { t } = useTranslation();
  let title = t("sidebar.0.Club");

  const { fetchClubs,handleClick } = clubHook();

  useEffect(() => {
    fetchClubs();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100%",

      }}
    >
      <Table
        headerTitle={title}
        dataTable={clubs}
        isLoading={isLoading}
        title={"Club"}
        onClick={handleExportClick}
        handleClick={handleClick}
      />
    </Box>
  );
};

export default Club;
