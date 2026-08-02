import React from "react";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../../assets/Style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Box className="footer-grid">
        
          <Box className="footer-column">
            <Typography variant="h5" className="footer-brand">
              NEXORA
            </Typography>

            <Typography
              color="text.secondary"
              className="footer-description"
            >
              Modern electronics selected for everyday life, work, and
              creativity.
            </Typography>
          </Box>

          
          <Box className="footer-column">
            <Typography className="footer-column-title">
              Shop
            </Typography>

            <Box className="footer-links">
              <Typography
                component={Link}
                to="/products"
                className="footer-link"
              >
                All Products
              </Typography>

              <Typography
                component={Link}
                to="/categories"
                className="footer-link"
              >
                Categories
              </Typography>

              <Typography
                component={Link}
                to="/products"
                className="footer-link"
              >
                New Arrivals
              </Typography>

              <Typography
                component={Link}
                to="/products"
                className="footer-link"
              >
                Best Sellers
              </Typography>
            </Box>
          </Box>

          <Box className="footer-column">
            <Typography className="footer-column-title">
              Customer Care
            </Typography>

            <Box className="footer-links">
              <Typography component={Link} to="#" className="footer-link">
                Shipping & Returns
              </Typography>

              <Typography component={Link} to="#" className="footer-link">
                FAQ
              </Typography>

              <Typography component={Link} to="#" className="footer-link">
                Contact Us
              </Typography>

              <Typography component={Link} to="#" className="footer-link">
                Warranty
              </Typography>
            </Box>
          </Box>

        
          <Box className="footer-column">
            <Typography className="footer-column-title">
              Follow Us
            </Typography>

            <Box className="footer-social-icons">
              <IconButton
                component="a"
                href="#"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href="#"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href="#"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Box className="footer-bottom">
          <Typography variant="body2" color="text.secondary">
            © 2026 NEXORA. All rights reserved to Aseel Abdalhalim.
          </Typography>

          <Box className="footer-legal-links">
            <Typography component={Link} to="#" className="footer-link">
              Privacy Policy
            </Typography>

            <Typography component={Link} to="#" className="footer-link">
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
