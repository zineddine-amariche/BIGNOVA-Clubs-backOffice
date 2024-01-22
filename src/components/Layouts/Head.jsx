import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { ChevronLeft, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { handleShowSidebar, handleTypeSidebar } from "../../Redux/global/slice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../utils/Button/PrimaryButton";

const Head = ({ title, retur, button, onClick,headerTitle }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  let reverso = currentLanguage === "ar" ? "row-reverse" : "row";

  const mode = useSelector((state) => state.AppTheme.mode);

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.primary.dark,
        fontSize: "22px",
        // backgroundColor: theme.palette.background.alt,
        // backgroundColor: theme.palette.background.paper,
        background:  mode == "light"
        ? "linear-gradient(90deg,  #5De0e6,#004aad)":theme.palette.background.main,


        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        justifyContent: "space-between",
        flexDirection: reverso,
        overflowX: "hidden",
        "&:hover": {
          textDecoration: retur ? "underline" : "none",
        },
      }}
    >
      <Box>
        {retur ? (
          <ChevronLeft sx={{ color: theme.palette.primary.light }} />
        ) : null}
        {headerTitle}
      </Box>
      {button && (
        <Stack direction={"row"} gap={2}>
          <PrimaryButton
            handleShowSidebar={handleShowSidebar}
            handleTypeSidebar={handleTypeSidebar}

            onClick={onClick}
            
          >
            Exporter
          </PrimaryButton>
          <PrimaryButton
            handleShowSidebar={handleShowSidebar}
            handleTypeSidebar={handleTypeSidebar}
            add
          >
            Ajouter
          </PrimaryButton>
        </Stack>
      )}
    </Box>
  );
};

export default Head;
