import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { DashboardContextProvider } from "@presentation/contexts/dashboard";

const materialTheme = createTheme();

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <ThemeProvider theme={materialTheme}>
      <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              height: "100vh",
            }}
          >
        <Outlet />
      </Box>
      </ThemeProvider>
    </DashboardContextProvider>
  );
};

export default Dashboard;