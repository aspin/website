import { createTheme } from "@mui/material/styles";

import { global } from "./global";

const light = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3rem",
        },
        h2: {
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "2em",
        },
        h3: {
          fontSize: "1.1rem",
        },
        h4: {
          fontSize: "1.0rem",
        },
        body1: {
          marginBottom: "1rem",
        },
        body2: {
          marginBottom: "0.8rem",
        },
      },
    },
  },
  ...global,
});

export {
  light
}