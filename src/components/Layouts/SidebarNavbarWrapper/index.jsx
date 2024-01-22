import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBare";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "20%", // Adjust width as needed
    flexShrink: 0,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      width: "5%",
    },
  },
  // Add more styles as needed
}));

const SidebarNavbarWrapper = () => {
  const theme = useTheme();
  const classes = useStyles();
  let data = {};
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isNonMobile) {
      setIsSidebarOpen(false);
    } else if (isNonMobile) {
      setIsSidebarOpen(true);
    }
  }, [isNonMobile]);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const getDirection = () => {
    // Check the language or any other condition and return the appropriate direction
    // Example: if (language === "ar") return "rtl"; else return "ltr";
    // return "ltr"; // Default to LTR if language is not determined

    if (currentLanguage === "ar") {
      return "rtl";
    } else {
      return "ltr";
    }
  };

  return (
    <Box
      style={{
        height: "100vh",
        background: theme.palette.background.default,
        overflow: "auto",
        overflowX: "hidden",

      }}
    >
      <Box
        display={"flex"}
        sx={{  minHeight: "100%" }}
      >
        {currentLanguage !== "ar" && (
          <Sidebar
            user={data}
            isNonMobile={isNonMobile}
            drawerWidth={isSidebarOpen ? "240px" : "70px"}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            type={"secondary"}
            flexDirection={getDirection()}
          />
        )}
        <Box width={"100%"}>
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
        </Box>
        {currentLanguage === "ar" && (
          <Sidebar
            user={data}
            isNonMobile={isNonMobile}
            drawerWidth={isSidebarOpen ? "240px" : "70px"}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            type={"secondary"}
            flexDirection={getDirection()}
          />
        )}
      </Box>
    </Box>
  );
};

export default SidebarNavbarWrapper;
 
