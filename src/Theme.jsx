import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  const isDark = mode === "dark";

  return createTheme({
    spacing: 6,
    palette: {
      mode: mode,
      background: {
        default: isDark? '#151312' : "#fcf9f8",
        paper: isDark? "#211f1e" : "#ffffff",
      },
      primary: {
        main: isDark? "#ecbaba" : "#6f5955",
        contrastText: isDark ? "#472828" : "#ffffff",
      },
      secondary:{
        main: isDark? "#ecbaba" : "#6f5955",
        contrastText: isDark? "#472828" : "#ffffff",
      },

      text: {
        primary: isDark? "#e7e1df" : "#1b1c1c",
        secondary: isDark? "#d0c4bd" : "#514441",
      },

      divider: isDark? "#4d4540" : "#d5c3bf",

      error:{
        main: isDark? "#ffb4ab" : "#ba1a1a",
      },
    },
    typography: {
      fontFamily: isDark ? '"Inter", sans-serif' : '"Plus Jakarta Sans", sans-serif',

      h1: {
        fontFamily: '"Playfair Display", serif',
      },

      h2: {
        fontFamily: '"Playfair Display", serif',
      },

      h3: {
        fontFamily: '"Playfair Display", serif',
      },

      h4: {
        fontFamily: '"Playfair Display", serif',
      },

      h5: {
        fontFamily: '"Playfair Display", serif',
      },

      h6: {
        fontFamily: '"Playfair Display", serif',
      },
    },

    shape: {
      borderRadius: isDark ? 8 : 16,
    },

    components:{
      MuiCssBaseline: {
        styleOverrides:{
          html: {
            minHeight: "100%",
          },

          body:{
            minHeight: "100%",
            margin: 0,
            backgroundColor: isDark? "#151312" : "#fcf9f8",
            color: isDark? "#e7e1df" : "#1b1c1c",
            transition: "background-color 0.3s ease, color 0.3s ease",
          },

          "#root":{
            minHeight:"100vh",
          },
        },
      },

      MuiContainer:{
        defaultProps: {
          maxWidth: false,
        },
        styleOverrides:{
          root:{
            maxWidth: "1280px",
          },
        },
      },

      MuiCard:{
        styleOverrides:{
          root: {
            backgroundColor: isDark? "#211f1e" : "#ffffff",
            border: isDark? "none" : "1px solid #e5e1da",
            borderRadius: isDark? "8px" : "16px",
            boxShadow: isDark? "0 8px 24px rgba(0, 0, 0, 0.4)" : "0 12px 32px rgba(45, 45, 45, 0.04)",
          },
        },
      },
      MuiButton:{
        styleOverrides:{
          root: {
            borderRadius: isDark? "4px" : "8px",
            textTransform: "none"
          },
        },
      },

      MuiTextField:{
        styleOverrides:{
          root:{
            "& .MuiOutlinedInput-root": {
              borderRadius: isDark ? "4px" : "8px",
            },
          },
        },
      },

      MuiAppBar:{
        styleOverrides: {
          root: {
            backgroundImage: "none",
            boxShadow: "none",
            borderBottom: `1px solid ${isDark? "#4d4540" : "#d5c3bf"}`
          },
        },
      },
    },

      
    });
};

export default getTheme;