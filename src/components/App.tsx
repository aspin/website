import "@fontsource/courier-prime";
import { Container } from "@mui/material";
import React from "react";

import experiences from "../data/experience";
import expertise from "../data/expertise";
import projects from "../data/project";
import About from "./about/About";
import Intro from "./intro/intro";
import Project from "./projects/Projects";
import Tech from "./tech/Tech";
import Work from "./work/Work";

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
        <About />
        <Work experiences={experiences} />
        <Project projects={projects} />
        <Tech expertise={expertise} />
      </Container>
    </React.Fragment>
  );
}

export default App;
