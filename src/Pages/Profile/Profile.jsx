import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../../Validations/UpdateProfileSchema";

export default function Profile() {
  const { data, isLoading, isError, error } = useProfile();
  console.log("Profile component rendered");

  const {register, handleSubmit, formState: {error}} = useForm({
    resolver: yupResolver(updateProfileSchema),
  });

  

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
