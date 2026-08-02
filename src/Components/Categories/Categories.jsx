import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import useCategories from "../../hooks/useCategories";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { Link } from "react-router-dom";

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="red">{error}</Typography>;

  const categoryIcons = {
    mobiles: <PhoneIphoneOutlinedIcon />,
    clothes: <CheckroomOutlinedIcon />,
    electronics: <DevicesOutlinedIcon />,
    "cat 9": <CategoryOutlinedIcon />,
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: 2, fontWeight: 600, fontSize: "0.95rem" }}
        >
          Browse
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
          Shop by Category
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
          },
          gap: 3,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {data?.response?.data?.map((category) => (
          <Box
            component={Link}
            to="/shop"
            key={category.id}
            sx={{
              minHeight: 180,
              p: 3,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 4,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",

              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "primary.main",
                boxShadow: 4,
              },

              "&:hover .category-icon": {
                transform: "scale(1.1)",
                bgcolor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            <Box
              className="category-icon"
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                bgcolor: "action.hover",
                color: "primary.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                transition: "all 0.3s ease",

                "& svg": {
                  fontSize: 31,
                },
              }}
            >
              {categoryIcons[category.name.toLowerCase()] || (
                <CategoryOutlinedIcon />
              )}
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, textTransform: "capitalize" }}
            >
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
