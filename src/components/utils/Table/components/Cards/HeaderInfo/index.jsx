import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { forwardRef, useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../../Button/Button.component";
import Space from "../../../../../Layouts/Space";
import FlexBetween from "../../../../../Layouts/FlexBetween";
import ReactToPrint from "react-to-print";
import { PrimaryText } from "../../../../typography";
import { getCurrentDate } from "../../../../../../helpers/getnewdate";
import { images } from "../../../components/photos";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useDeleteModal } from "../../../../../../pages/appStack/FIrst_Section/Club/Hooks/useDeleteModal";
import {
  handleBanneModal,
  handleDeleteModal,
} from "../../../../../../Redux/pages/club/slice";
const HeaderInfo = ({
  handleClick,
  handleClose,
  text,
  handlePrint,
  informationUser,
  title,
  handleClickMenu,
  primaryText,
  anchorEl,
  admin,
  ...props
}) => {
  const theme = useTheme();
  const sideBarType = useSelector((state) => state.globaleState.sideBarType);

  const [ModalShow, setModal] = useState(false);
  const [ShowDelete, setShowDelete] = useState(false);

  const handleCloseModal = () => {
    setModal(!ModalShow);
  };
  const handleCloseModalDelete = () => {
    setShowDelete(!ShowDelete);
  };

  const componentRef = useRef();
  return (
    <LayoutHeader>
      <LeftButtons
        handleClick={handleClick}
        sideBarType={sideBarType}
        primaryText={primaryText}
      />
      {admin ? (
        <AdminRightButtons />
      ) : (
        <RighttButtons
          sideBarType={sideBarType}
          componentRef={componentRef}
          anchorEl={anchorEl}
          informationUser={informationUser}
        />
      )}
      <PrintContent
        ref={componentRef}
        informationUser={informationUser}
        title={title}
      />
    </LayoutHeader>
  );
};

export default HeaderInfo;

const AdminRightButtons = forwardRef(
  (
    { sideBarType, handleClickMenu, handleClose, text, informationUser },
    anchorEl
  ) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [state, setstate] = useState(false);

    let objectCell = {
      cellValue: informationUser,
      value: true,
    };


    return (
      <Box>
        {!sideBarType ? (
          <>
            {/* <Button
              sx={{ color: theme.palette.primary.dark }}
              onClick={() => {
                dispatch(handleDeleteModal(objectCell));
              }}
            >
              <DeleteIcon fontSize="medium" sx={{ cursor: "pointer" }} />
            </Button> */}

            <Button
              sx={{ color: theme.palette.primary.dark }}
              onClick={handleClickMenu}
            >
              <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={state}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{text}</MenuItem>
            </Menu>
          </>
        ) : null}
      </Box>
    );
  }
);

const RighttButtons = forwardRef(
  (
    { sideBarType, handleClickMenu, handleClose, text, informationUser },
    anchorEl
  ) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [state, setstate] = useState(false);

    let objectCell = {
      cellValue: informationUser,
      value: true,
    };

    return (
      <Box>
        {!sideBarType ? (
          <>
      
            {informationUser.status == "VALIDATED" ? (
              <Button
                sx={{ color: theme.palette.primary.dark }}
                onClick={() => {
                  dispatch(handleBanneModal(objectCell));
                }}
              >
                <NotInterestedIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  color={"error"}
                />
              </Button>
            ) : (
              <Button
                sx={{ color: theme.palette.primary.dark }}
                onClick={() => {
                  dispatch(handleBanneModal(objectCell));
                }}
              >
                <CheckCircleIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  color={"success"}
                />
              </Button>
            )}

 
            <Button
              sx={{ color: theme.palette.primary.dark }}
              onClick={() => {
                dispatch(handleDeleteModal(objectCell));
              }}
            >
              <DeleteIcon fontSize="medium" sx={{ cursor: "pointer" }} />
            </Button>
 
            <Button
              sx={{ color: theme.palette.primary.dark }}
              onClick={handleClickMenu}
            >
              <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={state}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{text}</MenuItem>
            </Menu>
          </>
        ) : null}
      </Box>
    );
  }
);

 
export const PrintContent = React.forwardRef((props, ref) => {
  const theme = useTheme();
  let date = getCurrentDate();

  const { informationUser } = props;

  return (
    <div style={{ display: "none" }}>
      <div
        ref={ref}
        style={{
          paddingTop: 2,
          paddingBottom: 4,
          color: "#111",
          padding: 30,
        }}
      >
        {/* {informationUser?._id} */}
        <Stack direction="row" display="flex" justifyContent={"space-between"}>
          <Stack
            style={{ alignItems: "center" }}
            direction="column"
            display="flex"
          >
            <Box
              m="2rem 0rem 1.4rem 20px"
              display={"flex"}
              alignItems="center"
              component={"img"}
              src={images.inbox}
              width={"200px"}
              height="160px"
            />
            <PrimaryText
              text={"Entreprise BigNova"}
              color={theme.palette.grey[900]}
              fontWeight={700}
            />
          </Stack>
          <Stack>
            <PrimaryText
              text={date}
              color={theme.palette.grey[900]}
              fontWeight={700}
            />
          </Stack>
        </Stack>
        <Stack width={"100%"} alignItems="center" display="flex" p={2}>
          <PrimaryText
            text={`Details de ${props.title}`}
            color={theme.palette.grey[900]}
            sx={{ fontWeight: "700" }}
            fontWeight={700}
          />
        </Stack>

        {informationUser?.numerodelot && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"N° de lot selon EDD : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.numerodelot}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
        {informationUser?.typelot && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Type de lot : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.typelot[0]?.typeName}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.createdAt && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date de creation : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.createdAt}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.surfacesansbalcon && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Surface sans balcon : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.surfacesansbalcon}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.surfacetotal && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Surface totale : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.surfacetotal}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.bloc && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nombre de bloc : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.bloc}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.etage && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nombre d'etage : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.etage}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.prix && (
          <Stack
            justifyContent="flex-end"
            display={"flex"}
            flexDirection={"row"}
            p={1}
            width="100%"
          >
            <PrimaryText
              text={"Prix du lot : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
              fontSize={36}
            />
            <Box width={30}></Box>
            <PrimaryText
              text={"  " + informationUser?.prix}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
              fontSize={36}
            />
          </Stack>
        )}


        {informationUser?.name && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Nom du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.name}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
        {informationUser?.adresse && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Adresse du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.adresse}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.datestart && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date debut du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.datestart}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
        {informationUser?.datefin && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Date fin du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.datefin}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}

        {informationUser?.description && (
          <Stack
            alignItems="center"
            display={"flex"}
            flexDirection={"row"}
            p={1}
          >
            <PrimaryText
              text={"Description du porjet : "}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={700}
            />
            <PrimaryText
              text={"  " + informationUser?.description}
              color={theme.palette.grey[900]}
              sx={{ fontWeight: "700" }}
              fontWeight={600}
            />
          </Stack>
        )}
      </div>
    </div>
  );
});

const LeftButtons = ({ handleClick, sideBarType, primaryText }) => {
  const theme = useTheme();

  return (
    <>
      <Button
        onClick={handleClick}
        size="large"
        aria-label="return"
        component="span"
        style={{
          color: theme.palette.primary.dark,
        }}
        startIcon={<KeyboardBackspaceIcon />}
      >
        <PrimaryText
          fontSize={"18px"}
          text={sideBarType && primaryText ? primaryText : "Retour"}
          cursor
          color={theme.palette.primary.dark}
        />
      </Button>
    </>
  );
};

const LayoutHeader = ({ children }) => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          background: theme.palette.background.alt,
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          paddingX={2}
          width="100%"
        >
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
