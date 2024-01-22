import React from "react";
import { Drawer, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const CustDrawer = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  children,
}) => {
  const theme = useTheme();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const mode = useSelector((state) => state.AppTheme.mode);


  return (
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="permanent"
        anchor={currentLanguage !== "ar" ?"left":"right" }
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            // backgroundColor: theme.palette.background.alt,
        // backgroundColor: theme.palette.background.main,
        background:
        mode == "light"
          ? "linear-gradient(90deg, #004aad, #5De0e6)"
          : theme.palette.background.main,

            boxSixing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
            overflowY: "hidden",
            "&:hover": {
              overflowY: "auto",
            },
            "&::-webkit-scrollbar": {
              display: "none",
            },
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {children}
      </Drawer>
  );
};

export default CustDrawer;
