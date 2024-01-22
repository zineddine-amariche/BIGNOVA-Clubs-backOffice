import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import ListItemText from "@mui/material/ListItemText";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Stack from "@mui/material/Stack";
import { AdminRole, AdminStatus, RoleColors } from "../../../../../../data/userMockData";
import Pills from "../../usePills";
import { useSelector } from "react-redux";
import HeaderInfo from "../HeaderInfo";
import { makeStyles } from "@material-ui/core/styles";

const UserCard = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  imageSrc,
  handleClose,
  informationUser,
  open,
  ...props
}) => {
  const sideBarType = useSelector((state) => state.globaleState.sideBarType);

  return (
    <Box sx={sx}>
      {!sideBarType ? (
        <Info
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          informationUser={informationUser}
          open={open}
          title={title}
          sx={sx}
        />
      ) : (
        <FormCreate />
      )}
    </Box>
  );
};

export default UserCard;

const Info = ({
  title,
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  informationUser,
  open,
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
        open={open}
        text={'edit informatinos'}
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
        admin
      />

      <Stack  display="flex" alignItems="center"  >
        {Object.entries(informationUser).map(([key, value]) => {
          console.log('value', value)
          if (key === "profilePicture") {
            return (
              <Box
                key={key} // Add a unique key prop
                component="img"
                alt="profile"
                src={value}
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                  height: { md: "80px", lg: "90px" },
                  width: { md: "80px", lg: "90px" },
                }}
              />
            );
          } else if (key === "fullname") {
            return (
              <Typography
                key={key} // Add a unique key prop
                variant="h4"
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                {value}
              </Typography>
            );
          } else if (key == "role") {
            return (
              <Box key={key} mb={4}>
                {/* Add a unique key prop */}
                <Pills
                  text={AdminRole.map((element) => {
                    if (element.role == value) {

                    
                      return element.role;
                    }
                  })}

                  bgColorPill={AdminRole.map((element) => {
                    if (element.role == value) {

                  
                      return element.color;
                    }
                  })}
                  // bgColorPill={AdminRole.map((element) => {
                  //   if (element.role === value) {
                  //     return element.role;
                  //   }
                  // })}
                />
              </Box>
            );
          } else {
            return null; // Return null for other cases if needed
          }
        })}
      </Stack>
      <CustomDivider text="More information" />


      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ ml: 4, color: theme.palette.primary.dark }}
      >
        <List>
          {Object.entries(informationUser).map(([key, value]) => {
            if (
              key === "firstName" ||
              key === "lastName" ||
              key === "email" ||
              key === "createdAt"
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
                        case "firstName":
                          return <MyLocationIcon />;
                        case "email":
                          return <AlternateEmailIcon />;
                        case "lastName":
                          return <MyLocationIcon />;
                        case "createdAt":
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
                      style: { color: theme.palette.primary.dark },
                    }}
                  />
                </ListItem>
              );
            }
          })}
        </List>
      </Box>
    </Box>
  );
};

const FormCreate = () => {
  return <></>;
};

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


{/* 
      <Divider variant="middle">
        {" "}
        <Typography
          variant="h5"
          style={{
            color: theme.palette.primary.dark,
          }}
        >
          {" "}
          More information{" "}
        </Typography>{" "}
      </Divider> */}


            {/* <Box
      display={"flex"}
      justifyContent={"space-between"}
    >
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="return"
        component="span"
        style={{
          color: theme.palette.primary.dark,
        }}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <Button
        sx={{ color: theme.palette.primary.dark }}
        onClick={handleClickMenu}
      >
        <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit {title}</MenuItem>
      </Menu>
    </Box> */}