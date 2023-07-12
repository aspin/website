import "@fontsource/courier-prime";
import { Container } from "@mui/material";
import React from "react";

import experiences from "../data/experience";
import { expertise, recentExpertise } from "../data/expertise";
import projects from "../data/project";
import publications from "../data/publication";
import About from "./about/About";
import Footer from "./footer/Footer";
import Intro from "./intro/intro";
import Projects from "./projects/Projects";
import Publications from "./publications/Publications";
import Tech from "./tech/Tech";
import Work from "./work/Work";

function App() {
  return (
    <React.Fragment>
      <Intro />
      <Container maxWidth="md">
        <Work experiences={experiences} />
        <Tech recentExpertise={recentExpertise} expertise={expertise} />
        <About />
        <Projects projects={projects} />
        <Publications publications={publications} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
