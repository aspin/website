import { createTheme } from "@mui/material";
import { globalTheme } from "./global";

const colors = {
  background: "#404040",
  text: "#DCDCCC",
  subtext: "#8CD0D3",
  link: "#FFCFAF",
  special: "#82A282",
  specialSub: "#9ECE9E",
};

const zenburn = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: colors.text,
          fontSize: "3rem",
        },
        h2: {
          color: colors.subtext,
          fontSize: "1.2rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: colors.link
        }
      }
    }
  },
  palette: {
    background: {
      default: colors.background
    }
  },
  ...globalTheme
});

// https://en.wikipedia.org/wiki/Wikipedia:Zenburn
export { zenburn, colors };
