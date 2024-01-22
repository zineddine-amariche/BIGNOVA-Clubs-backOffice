import React, { useRef } from "react";
import { useTheme } from "@mui/material";
import Head from "../../../components/Layouts/Head";
import CustomPagination, { CustomFooter } from "./components/usePaginations";
import { DataGrid } from "@mui/x-data-grid";
import { useTable } from "./Hooks/useTable";
import Layout from "../../Layouts/LoaderPageTable";
import InfoCard from "./components/useCardInfo";

import { useSelector } from "react-redux";
import DrawerInfo from "../Drawer/useDrawerInfo";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useColums } from "./components/utils";

const Table = ({ isLoading, title, dataTable, headerTitle, onClick,handleClick }) => {
  const theme = useTheme();
  const { handleOpen } = useTable();
  const { showSideBarInformations, informations } = useSelector(
    (state) => state.globaleState
  );

  const { getRowId, handleCloseDrawer } = useTable();

  const { columnsAdmins, columnClub } = useColums(handleOpen, dataTable,handleClick);

  let customColumns;

  switch (title) {
    case "Club":
      customColumns = columnClub;
      break;

    case "Admins":
    case "Utilisateur":
      customColumns = columnsAdmins;
      break;
    default:
      break;
  }

  const componentRef = useRef();

  return (
    <Layout
      isLoading={isLoading}
      Children={() => {
        return (
          <>
            <Head
              title={title}
              headerTitle={headerTitle}
              button
              mode={undefined}
              retur={undefined}
              onClick={onClick}
            />

            <RenderTable
              ref={componentRef}
              dataTable={dataTable}
              customColumns={customColumns}
              getRowId={getRowId}
            />

            <DrawerInfo
              isDrawerInfoOpen={showSideBarInformations}
              handleCloseDrawer={handleCloseDrawer}
            >
              <InfoCard
                informationUser={informations}
                handleClick={handleCloseDrawer}
                title={title}
                ref={componentRef}
              />
            </DrawerInfo>
          </>
        );
      }}
    />
  );
};

export default Table;

export const RenderTable = forwardRef((props, ref) => {
  const { dataTable, customColumns, getRowId } = props;
  const theme = useTheme();
  return (
    <div
      ref={ref}
      style={{
        paddingTop: 2,
        paddingBottom: 4,
      }}
    >
      {dataTable && (
        <DataGrid
          autoHeight
          rows={dataTable}
          density="comfortable"
          disableSelectionOnClick={false}
          columns={customColumns}
          pageSize={10}
          getRowId={getRowId}
          rowsPerPageOptions={[10]}
          localeText={{
            footerRowSelected: CustomPagination,
          }}
          components={{
            Footer: CustomFooter,
          }}
          sx={{
            backgroundColor: theme.palette.background.alt,
            boxShadow: 2,
            m: 3,
            color: theme.palette.primary.dark,
          }}
        />
      )}
    </div>
  );
});
