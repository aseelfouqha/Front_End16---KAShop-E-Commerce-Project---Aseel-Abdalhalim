import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../Store/useAuthStore";
import useCart from "../../hooks/useCart";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Badge,
  Typography,
  Box,
} from "@mui/material";
import { useThemeStore } from "../../Store/useThemeStore";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Navbar({ userName }) {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLang = i18next.language == "ar" ? "en" : "ar";
    i18next.changeLanguage(newLang);
  };

  // const {data} = useCart();
  // const cartCount = data?.items.length || 0;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const { mode, toggleMode } = useThemeStore();

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* LOGO */}
          <Typography
            component={Link}
            to="/"
            variant="h5"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.14em",
              flexShrink: 0,
            }}
          >
            NEXORA
          </Typography>

          {/* End Of LOGO */}

          {/* Start of the middle section */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              flex: 1,
            }}
          >
            <Typography
              component={Link}
              to="/"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                position: "relative",
                transition: "color 0.2s ease",
                "&:hover": { color: "text.primary" },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  width: 0,
                  height: "1px",
                  backgroundColor: "primary.main",
                  transition: "width 0.2s ease",
                },

                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {t("Home")}
            </Typography>

            <Typography
              component={Link}
              to="/products"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                position: "relative",
                transition: "color 0.2s ease",
                "&:hover": { color: "text.primary" },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  width: 0,
                  height: "1px",
                  backgroundColor: "primary.main",
                  transition: "width 0.2s ease",
                },

                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {t("Products")}
            </Typography>

            {token && (
              <>
                <Typography
                  component={Link}
                  to="/Shop"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    position: "relative",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -6,
                      width: 0,
                      height: "1px",
                      backgroundColor: "primary.main",
                      transition: "width 0.2s ease",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {t("Shop")}
                </Typography>
              </>
            
            )}
          </Box>
          {/* End of the Middle Section */}

          {/* Start of the right Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              flexShrink: 0,
            }}
          >
            {token ? (
              <>
                <IconButton color="inherit">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>

                <IconButton color="inherit" component={Link} to="/cart">
                  <Badge badgeContent={0} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </IconButton>

                <IconButton color="inherit" component={Link} to="/Profile">
                  <PersonOutlineOutlinedIcon />
                </IconButton>

                <IconButton
                  color="inherit"
                  onClick={handleLogout}
                  aria-label="logout"
                >
                  <LogoutOutlinedIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/register"
                  color="inherit"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  Register
                </Button>

                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 2.5,
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>
              </>
            )}

            <IconButton onClick={changeLanguage} color="inherit">
              <Typography
                component="span"
                sx={{ fontSize: "0.75rem", fontWeight: 700 }}
              >
                {i18next.language === "ar" ? "EN" : "AR"}
              </Typography>
            </IconButton>

            <IconButton onClick={toggleMode} color="inherit">
              {mode === "light" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>

            {/* <IconButton
              color="inherit"
              sx={{
                display: {
                  sx: "inline-flex",
                  md: "none",
                },
              }}
            >
              <MenuOutlinedIcon/>
            </IconButton> */}
          </Box>
          {/* End of the right Section */}
        </Toolbar>
      </Container>
    </AppBar>

    // <nav bg="primary" data-bs-theme="dark">
    //   <Button onClick={changeLanguage}>

    //     {i18next.language === "ar"?"EN":"AR"}
    //   </Button>
    //   <IconButton onClick={toggleMode} color='inherit'>
    //     {mode === "light"? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
    //   </IconButton>

    //   <Link to="/">{t('Home')}</Link>
    //   <Link to="/products">{t('Products')}</Link>

    //   {token? <>
    //       <Link to="/cart">{t('Cart')} </Link>
    //       <Link to="/Profile">{t('Profile')} </Link>
    //       <Link to="/login" component ="button" onClick={logout}>{t('Logout')}</Link>
    //   </> :
    //       <> <Link to="/login">{t('Login')}</Link>
    //          <Link to="/register">{t('Register')}</Link>
    //       </>
    //   }

    // </nav>
  );
}
