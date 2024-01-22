import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import UserCard from "./Cards/adminCard";
import ClubCard from "./Cards/ClubCard";

const InfoCard = React.forwardRef((props, ref) => {
  const theme = useTheme();

  const { informationUser, handleClick, title, handlePrint } = props;
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const paperStyle1 = {
    height: "100%",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.alt,
  };

  const renderStep = () => {
    switch (title) {
      case "Club":
        return (
          <ClubCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            handlePrint={handlePrint}
            title={title}
          />
        );
      case "Admins":
      case "Utilisateur":
        return (
          <UserCard
            {...props}
            sx={paperStyle1}
            handleClick={handleClick}
            handleClickMenu={handleClickMenu}
            anchorEl={anchorEl}
            handleClose={handleClose}
            informationUser={informationUser}
            open={open}
            handlePrint={handlePrint}
            title={title}
          />
        );
      default:
        // Handle the default case here, if needed
        return null;
    }
  };

  return <Box height={"100%"}>{renderStep()}</Box>;
});
export default InfoCard;
