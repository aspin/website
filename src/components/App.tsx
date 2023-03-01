import React from "react";
import { Container } from "@mui/material";
import Experiences from "./experiences/Experiences";
import experiences from "../data/experience";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container>
      <Experiences experiences={experiences}></Experiences>
    </Container>
  );
}

export default App;