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
        body1: {
          marginBottom: "1em",
        },
      },
    },
  },
  ...global,
});

export {
  light
}