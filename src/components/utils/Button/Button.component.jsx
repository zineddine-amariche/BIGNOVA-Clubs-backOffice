import React from "react";
import { useTheme } from "@mui/material";
import { Button } from '@material-ui/core';

export const PrimaryNavigationButton = ({
  type,
  onClick,
  bgcolor,
  text,
  textColor,
  state,
  pathname,
}) => (
  <Button
    variant="contained"
    sx={{
      p: 1,
      mr: 2,
      bgcolor,
    }}
  >
    {text}
  </Button>
);




export const StyledButton = ({ onClick, children,type }) => {
  const theme = useTheme();

  const buttonStyle = {
    backgroundColor:type? theme.palette.error.main: theme.palette.secondary.main,
    color: "#FFF",
    fontSize: 17,
    marginTop: 3,
    width: "100%",
    alignSelf: "center",
    border: type ?`2px solid ${theme.palette.error.main}`:`1px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
  };

  return (
    <Button
      variant="contained"
      style={buttonStyle}
      onClick={onClick}
      pt={3}
    >
      {children}
    </Button>
  );
};


