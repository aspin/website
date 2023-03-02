import "@fontsource/courier-prime/300.css";
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/500.css";
import "@fontsource/courier-prime/700.css";
import { Container } from "@mui/material";
import React from "react";

import experiences from "../data/experience";
import Experiences from "./experiences/Experiences";
import Intro from "./intro/intro";

function App() {
  return (
    <Container maxWidth="sm">
      <Intro />
      <Experiences experiences={experiences} />
    </Container>
  );
}

export default App;
