import React from "react";

import {
  GridFooterContainer,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridPagination,
} from "@mui/x-data-grid";

import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material";
import { makeStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& .MuiPaginationItem-root": {
      color: theme.palette.primary.contrastText,
    },
  },
  gridFooterContainer: {
    // Add your custom styles here

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.primary.dark,
    "& .MuiSvgIcon-root": {

    },
  },
  gridPagination: {
    "& .MuiButton-textPrimary": {
      color: theme.palette.primary.light,
    },
  },
}));

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const theme = useTheme();


  const classes = useStyles();

  return (
    <Pagination
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}

      sx={{
        "& .MuiPaginationItem-root": {
          color: theme.palette.primary.dark,
        },
        "& .MuiPaginationItem-page:hover": {
          color: theme.palette.primary.dark,
        },
      }}
    />
  );
};

const CustomFooter = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <GridFooterContainer className={classes.gridFooterContainer}>
      <CustomPagination   />
      <GridPagination sx={{"& .MuiToolbar-root":{
        color: theme.palette.primary.dark,
      },
    
      }} />
    </GridFooterContainer>
  );
};

export default CustomPagination;
export { CustomFooter };
