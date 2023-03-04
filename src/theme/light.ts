import { createTheme } from "@mui/material";

import { global } from "./global";
import { zenburnColors } from "./zenburn";

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
        },
        h3: {
          fontSize: "1.1rem",
        },
      },
    },
  },
  ...global,
});

export {
  light
}