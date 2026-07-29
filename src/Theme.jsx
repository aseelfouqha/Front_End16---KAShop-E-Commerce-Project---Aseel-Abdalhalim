import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    spacing: 6,
    palette: {
      mode: mode,
      primary: {
        main: "#ff0000",
      },
    },
    typography: {
      h2: {
        fontSize: "3rem",
      },
    },
  });
};

export default getTheme;