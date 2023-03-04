import { List, ThemeProvider, Typography } from "@mui/material";
import React from "react";

import { light } from "../../theme/light";

function About() {
  return (
    <ThemeProvider theme={light}>
      <Typography variant="h2">[about]</Typography>
      <Typography variant="body1">I'm Kevin, and I program.</Typography>
    </ThemeProvider>
  );
}

export default About;
