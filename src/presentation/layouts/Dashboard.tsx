import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { DashboardContextProvider } from "@presentation/contexts/dashboard";

const materialTheme = createTheme();

const Dashboard: React.FC = () => {
  return (
    <DashboardContextProvider>
      <ThemeProvider theme={materialTheme}>
        <Outlet />
      </ThemeProvider>
    </DashboardContextProvider>
  );
};

export default Dashboard;