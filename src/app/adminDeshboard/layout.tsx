"use client";

import React, { ReactNode } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LeftSidebar from "@/components/AdminLayouts/LeftSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <LeftSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Adjust for the AppBar height
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
