import { Typography, useTheme } from "@mui/material";
import React from "react";

export const PrimaryText = ({
  fontSize,
  fontWeight,
  color,
  text,
  lineHeight,
  mr,
  cursor,
  maxWidth,
  backgroundColor,
  textDecoration,
}) => {
  const theme = useTheme();

  return (
    <Typography
      fontWeight={fontWeight}
      fontSize={fontSize}
      maxWidth={maxWidth}
      lineHeight={lineHeight ? lineHeight : "30px"}
      sx={{
        color: color ? color : theme.palette.primary.light,
        mr: mr ? mr : 0,
        cursor: cursor ? "pointer" : "default",
        backgroundColor: backgroundColor,
        textDecoration: textDecoration ? "underline" : "none",
      }}
    >
      {text}
    </Typography>
  );
};
