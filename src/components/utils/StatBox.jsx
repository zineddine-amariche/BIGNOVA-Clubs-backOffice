import { Box, Typography, useTheme } from "@mui/material";
import { themeSettings } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();


  return (
    <Box width="100%"  p={3} >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.primary.dark }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px" >
        <Typography noWrap variant="h5" sx={{ color:theme.palette.primary.dark }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.primary.dark }}
          noWrap
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
