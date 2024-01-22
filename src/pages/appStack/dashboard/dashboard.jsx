import React from "react";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Layouts/Head";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import StatBox from "../../../components/utils/StatBox";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../../components/utils/LineChart";
import { mockTransactions } from "../../../components/utils/data/mockData";
import ProgressCircle from "../../../components/utils/ProgressCircle";
import BarChart from "../../../components/utils/BarChart";

const Dashboard = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  let title = t("sidebar.0.Dashboard");
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Head title={"dashboard"} headerTitle={title} />
      <Grid container spacing={2} p={2} columns={{ xs: 3, md: 12 }}>
        <Grid item xs={3}>
          <Item>
         
              <StatBox
                title="12,361"
                subtitle="Téléchargement total"
                progress="0.75"
                increase="+14%"
                icon={<DownloadForOfflineIcon sx={{ fontSize: "26px" }} />}
              />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
      
              <StatBox
                title="431,225"
                subtitle="Ventes obtenues"
                progress="0.50"
                increase="+21%"
                icon={<PointOfSaleIcon sx={{ fontSize: "26px" }} />}
              />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
 
              <StatBox
                title="361"
                subtitle="Total Clubs"
                progress="0.65"
                increase="+19%"
                icon={<SportsSoccerIcon sx={{ fontSize: "26px" }} />}
              />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
 
              <StatBox
                title="32,441"
                subtitle="New Clubs"
                progress="0.30"
                increase="+5%"
                icon={<DomainAddIcon sx={{ fontSize: "26px" }} />}
              />
          </Item>
        </Grid>
        {/* ROW 2 */}

        <Grid item xs={8}>
          <Item2>
 
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={theme.palette.text.primary}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={theme.palette.text.primary}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon sx={{ fontSize: "26px" }} />
                </IconButton>
              </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
            {/* </Box> */}
          </Item2>
        </Grid>
        <Grid item xs={4} spacing={1}>
          <Item3>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.background.paper}`}
              colors={theme.palette.primary.dark}
              p="15px"
            >
              <Typography
                color={theme.palette.primary.dark}
                variant="h5"
                fontWeight="600"
              >
                Top 10 clubs 
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${theme.palette.background.paper}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={theme.palette.primary.dark}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={theme.palette.text.primary}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={theme.palette.primary.dark}>{transaction.date}</Box>
                <Box
                  backgroundColor={theme.palette.primary.dark}
                  p="5px 10px"
                  borderRadius="4px"
                  color={theme.palette.primary.light}
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Item3>
        </Grid>

        {/* ROW 3 */}
        <Grid item xs={4}>
          <Item4>
            <Typography
              variant="h5"
              fontWeight="600"
            >
              Campagne
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={theme.palette.primary.dark}
                sx={{ mt: "15px" }}
              >
                $48,352 revenus générés
              </Typography>
              <Typography>
              Comprend les dépenses et les coûts divers supplémentaires
              </Typography>
            </Box>
          </Item4>
        </Grid>

        <Grid item xs={4}>
          <Item4>
              <Typography
                variant="h5"
                fontWeight="600"
              >
           Quantité de vente
              </Typography>
              <Box height="240px" mt="-30px">
                <BarChart isDashboard={true} />
              </Box>
          </Item4>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow:"hidden",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "400px",
}));
const Item3 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "auto",
  maxHeight: "400px",
}));

const Item4 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "350px",
  padding: theme.spacing(4),
  
}));