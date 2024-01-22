import React, { useState } from "react";
import { Box, ListItemIcon, Stack, Typography, useTheme } from "@mui/material";
import HeaderInfo from "../../../HeaderInfo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { RoleColors } from "../../../../../../../../data/userMockData";
import { makeStyles } from "@material-ui/core/styles";
import UsePillsEtat from "../../../../usePillsEtat";

const Info = ({
  title,
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  informationUser,
  text,
  HandlDelete,
  handlePrint,
}) => {
  const theme = useTheme();


  return (
    <Box
      style={{
        background: theme.palette.background.alt,
        minHeight: "100%",
      }}
    >
      <HeaderInfo
        handlePrint={handlePrint}
        handleClick={handleClick}
        handleClickMenu={handleClickMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
        text={text}
        HandlDelete={() => {
          let obj = {
            id: informationUser._id,
          };
          if (HandlDelete) {
            HandlDelete(obj);
          }
        }}
        informationUser={informationUser}
        title={title}
      />
      <CustomDivider text="More information" />

      <Stack spacing={1} display="flex" alignItems="center" mb="2rem">
        {Object.entries(informationUser).map(([key, value]) => {
          if (key === "roleName") {
            const selectedEtat = RoleColors.find(
              (element) => element.role == value
            );
            if (selectedEtat) {
              return (
                <Box
                  key={key}
                  bgcolor={selectedEtat.color}
                  sx={{ borderRadius: 8 }}
                >
                  <UsePillsEtat
                    text={selectedEtat.role}
                    bgColorPill={selectedEtat.color}
                  />
                </Box>
              );
            }
          }
          return null;
        })}
      </Stack>

      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ my: ".5rem", color: theme.palette.primary.dark, paddingLeft: 5 }}
      >
        <List>
          {Object.entries(informationUser).map(([key, value]) => {
            if (
              key === "name" ||
              key === "phoneNumber" ||
              key === "headName" ||
              key === "Description" ||
              key === "createdDate" ||
              key === "description"
            ) {
              return (
                <ListItem key={key}>
                  <ListItemIcon
                    sx={{
                      color: theme.palette.primary.dark,
                    }}
                  >
                    {(() => {
                      switch (key) {
                        case "name":
                          return <PhoneIcon />;
                        case "phoneNumber":
                          return <PhoneIcon />;
                        case "headName":
                          return <AlternateEmailIcon />;
                        case "Description":
                          return <MyLocationIcon />;
                        case "createdDate":
                          return <MyLocationIcon />;
                        case "description":
                          return <DateRangeIcon />;
                      }
                    })()}
                  </ListItemIcon>

                  <ListItemText
                    primary={` ${key.charAt(0).toUpperCase() + key.slice(1)}:`}
                    secondary={value}
                    sx={{
                      color: theme.palette.primary.dark,
                    }}
                    secondaryTypographyProps={{
                      style: {
                        color: theme.palette.primary.dark,
                        lineHeight: "26px",
                      },
                    }}
                  />
                </ListItem>
              );
            }
          })}
        </List>
        <Box display={"flex"} alignSelf={"flex-end"} pr={3}>
          <Typography>{" Created By :  "} </Typography>
          <Typography>{informationUser.createdBy[0].role}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;

const CustomDivider = ({ text }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <div className={classes.customDivider}>
        <Typography
          variant="h5"
          style={{
            color: theme.palette.primary.dark,
          }}
        >
          {text}
        </Typography>
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  customDivider: {
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    zIndex: 100,
    "&::before, &::after": {
      content: "''",
      flex: 1,
      borderBottom: `1px solid ${theme.palette.grey[700]}`,
    },
    "&::before": {
      marginRight: theme.spacing(1),
    },
    "&::after": {
      marginLeft: theme.spacing(1),
    },
  },
}));
