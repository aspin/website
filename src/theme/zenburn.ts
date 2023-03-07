import { createTheme } from "@mui/material/styles";

import { global } from "./global";

// https://en.wikipedia.org/wiki/Wikipedia:Zenburn
const zenburnColors = {
  background: "#404040",
  text: "#DCDCCC",
  subtext: "#8CD0D3",
  link: "#FFCFAF",
  special: "#82A282",
  specialSub: "#9ECE9E",
};

const zenburn = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: zenburnColors.link,
          textDecorationColor: zenburnColors.link,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: zenburnColors.text,
          fontSize: "3rem",
        },
        h2: {
          color: zenburnColors.subtext,
          fontSize: "1.2rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: zenburnColors.link,
        },
      },
    },
  },
  ...global,
});

export { zenburn, zenburnColors };
