import React from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const DrawerInfo = (props) => {
  const theme = useTheme();
  const { children, isDrawerInfoOpen, handleCloseDrawer } = props;

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  let reverso = currentLanguage === "ar" ? "left" : "right";

  return (
    <Drawer
      PaperProps={{
        sx: {
          background: theme.palette.background.alt,
          width: 640,
        },
      }}
      anchor={reverso}
      open={isDrawerInfoOpen}
      onClose={handleCloseDrawer}
    >
      {children}
    </Drawer>
  );
};

export default DrawerInfo;
