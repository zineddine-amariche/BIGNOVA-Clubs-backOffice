import React  from "react";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import CreateProjectForm from "./components/CreateForm";
import HeaderInfo from "../HeaderInfo";
import Info from "./components/Info";
import { createProjectHooks } from "./Hooks/useCreateProject";

const ClubCard = ({
  title,
  sx,
  handleClick,
  handleClickMenu,
  anchorEl,
  imageSrc,
  handleClose,
  informationUser,
  open,
  HandlDelete,
  ...props
}) => {
  const sideBarType = useSelector (
    (state) => state.globaleState.sideBarType
  );
  const { onDelete } = createProjectHooks();

  return (
   
      !sideBarType ? (
        <Info
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          informationUser={informationUser}
          open={open}
          title={title}
          sx={sx}
          text={"Edit Club"}
          HandlDelete={() => {
            onDelete(informationUser.id);
          }}
        />
      ) : (
        <FormCreateClub
          handleClick={handleClick}
          handleClickMenu={handleClickMenu}
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
          text={"Voir Club"}
          title={title}
          primaryText={"Créer un nouveau club !"}

        />
      )
    
  )
};

export default ClubCard;

const FormCreateClub = ({
  handleClick,
  handleClickMenu,
  anchorEl,
  handleClose,
  open,
  text,
  title,
  primaryText
}) => {
  return (
    <Box>
      <HeaderInfo
        handleClick={handleClick}
        handleClickMenu={handleClickMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        text={text}
        title={title}
        primaryText={primaryText}
      />

      <Stack display="flex" alignItems={"center"}>
        <CreateProjectForm    />
      </Stack>
    </Box>
  );
};
