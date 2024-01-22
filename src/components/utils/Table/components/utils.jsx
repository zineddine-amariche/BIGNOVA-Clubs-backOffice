import { Box } from "@mui/material";
import { AdminRole, AdminStatus, ClubStatus } from "../../../../data/userMockData";
import Pills from "./usePills";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

export function useColums(handleOpen, dataTable, handleClick) {
  const columnsAdmins = [
    
    {
      field: "firstName",
      align: "center",
      headerAlign: "center",
      headerName: "nom ",
      minWidth: 200,
    },
    {
      field: "lastName",
      align: "center",
      headerAlign: "center",
      headerName: "prénom",
      minWidth: 200,
    },
    {
      field: "role",
      align: "center",
      headerAlign: "center",
      headerName: "Role",
      minWidth: 100,
      renderCell: (roleValue) => {
        let role = {
          label: "",
          color: "",
        };
        //generating the pill color according to the role the user has
        AdminRole.forEach((element) => {
          if (roleValue.row.role == element.role) {
            role = {
              label: element.role,
              color: element.color,
            };
            return;
          }
        });

        return (
          <Box>
            <Pills bgColorPill={role.color} text={role.label} />
          </Box>
        );
      },
    },
    // {
    //   field: "birthDay",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "date de naissance",
    //   minWidth: 200,
    // },

    {
      field: "email",
      align: "center",
      headerAlign: "center",
      headerName: "e-mail",
      type: "string",
      minWidth: 250,
    },

    {
      field: "status",
      align: "center",
      headerAlign: "center",
      headerName: "Status",
      minWidth: 100,
      renderCell: (roleValue) => {
        let role = {
          label: "",
          color: "",
        };
        //generating the pill color according to the role the user has
        AdminStatus.forEach((element) => {
          if (roleValue.row.verified.toString() == element.verified.toString()) {
            role = {
              label: element.verified,
              color: element.color,
            };
            return;
          }
        });

        return (
          <Box>
            <Pills bgColorPill={role.color} text={role.label} />
          </Box>
        );
      },
    },
    // {
    //   field: "phone",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "numéro de téléphone",
    //   type: "string",
    //   minWidth: 250,
    // },

    // {
    //   field: "createdAt",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "date de création ",
    //   type: "string",
    //   minWidth: 100,
    // },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Détails",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
  ];

  const columnClub = [
    {
      field: "name",
      align: "center",
      headerAlign: "center",
      headerName: "nom",
      minWidth: 200,
    },
    {
      field: "phoneNumber",
      align: "center",
      headerAlign: "center",
      headerName: "numero de téléphone",
      minWidth: 200,
    },

    {
      field: "description",
      align: "center",
      headerAlign: "center",
      headerName: "Description",
      minWidth: 200,
    },

    {
      field: "status",
      align: "center",
      headerAlign: "center",
      headerName: "Status",
      minWidth: 100,
      renderCell: (roleValue) => {
        let role = {
          label: "",
          color: "",
        };
        //generating the pill color according to the role the user has
        ClubStatus.forEach((element) => {
          if (roleValue.row.status == element.role) {
            role = {
              label: element.role,
              color: element.color,
            };
            return;
          }
        });

        return (
          <Box>
            <Pills bgColorPill={role.color} text={role.label} />
          </Box>
        );
      },
    },

    {
      field: "createdDate",
      align: "center",
      headerAlign: "center",
      headerName: "date de début",
      type: "string",
      minWidth: 200,
    },

    {
      field: "createdBy",
      align: "center",
      headerAlign: "center",
      headerName: "Créé par",
      type: "string",
      minWidth: 200,
      valueGetter: (params) => {
        const createdBy = params?.row?.createdBy;
        if (createdBy) {
          return createdBy.map((item) => item.role).join(", ");
        }
        return "admin";
      },
      hide: (params) => !params?.row?.createdBy, // Hide the column if createdBy is null
    },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Détails",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
    {
      field: "",
      align: "center",
      headerAlign: "center",
      headerName: "Banner",
      minWidth: 100,
      renderCell: (cellValue) => {
        // console.log("cellValue.row.status ", cellValue.row.status);

        if (cellValue.row.status == "VALIDATED") {
          return (
            <Box onClick={() => handleClick(cellValue)}>
              <NotInterestedIcon
                color={"error"}
                fontSize="large"
                sx={{ cursor: "pointer" }}
              />
            </Box>
          );
        } else {
          return (  <Box onClick={() => handleClick(cellValue)}>
            <CheckCircleIcon
              color={"success"}
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          </Box>)
        }
      },
    },
  ];

  return {
    columnsAdmins,
    columnClub,
  };
}
