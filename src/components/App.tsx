import "@fontsource/courier-prime";
import { Container, ThemeProvider } from "@mui/material";
import React from "react";

import experiences from "../data/experience";
import Experiences from "./experiences/Experiences";
import Intro from "./intro/intro";

function App() {
  return (
    <React.Fragment>
      <Intro />
      <Container
        maxWidth="md"
        sx={{
          padding: "4em 0",
        }}
      >
        <Experiences experiences={experiences} />
      </Container>
    </React.Fragment>
  );
}

export default App;
