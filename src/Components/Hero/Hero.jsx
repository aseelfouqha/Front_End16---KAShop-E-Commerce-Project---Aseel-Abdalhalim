import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../assets/images/heroImage.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: {
          sx: "70vh",
          md: "82vh",
        },
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.32),
            rgba(0, 0, 0, 0.32)
          ),
          url(${heroImage})
          `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", color: "#ffffff" }}>
          <Typography
            component="p"
            sx={{
              mb: 2,
              fontSize: 17,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Smartt Living, Beautifully Designed
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.1,
              fontWeight: 600,
              mb: 3,
              textShadow: "0 2px 18px rbga(0,0,0,0.22",
            }}
          >
            Technology made for modern Life
          </Typography>
          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Discover carefully selected electronics and smart appliances
            designed to make everyday life simpler.
          </Typography>
          <Button
            component={Link}
            to="/shop"
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.4 }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
