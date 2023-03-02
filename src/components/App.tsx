import "@fontsource/courier-prime";
import { Container, ThemeProvider } from "@mui/material";
import React from "react";

import experiences from "../data/experience";
import { global } from "../theme/global";
import Experiences from "./experiences/Experiences";
import Intro from "./intro/intro";

function App() {
  return (
    <ThemeProvider theme={global}>
      <Intro />
      <Container
        maxWidth="md"
        sx={{
          padding: "4em 0",
        }}
      >
        <Experiences experiences={experiences} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
