import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useProfile from "../../hooks/useProfile";

export default function Profile() {
  const { data, isLoading, isError, error } = useProfile();
  console.log("Profile component rendered");

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error">
        {error?.message || "Profile Page Failed to load"}
      </Typography>
    );
  }
  return (
    <Box>
      <Typography>My Profile</Typography>

      <Link to="">Info</Link>
      <Link to="orders">Orders</Link>

      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
