import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";

import { zenburn, zenburnColors } from "../../theme/zenburn";
import Github from "../github/Github";
import LinkNewTab from "../link_new_tab/LinkNewTab";
import Nav from "../nav/Nav";

function Intro() {
  return (
    <ThemeProvider theme={zenburn}>
      <Box
        sx={{
          margin: "0",
          width: "100%",
          backgroundColor: zenburnColors.background,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            padding: "4em 0",
          }}
        >
          <Grid container rowSpacing={6} columnSpacing={2} alignItems="center">
            <Grid item md={8} xs={12}>
              <Typography variant="h1">Kevin Chen</Typography>
              <Typography variant="h2">
                dev @{" "}
                <LinkNewTab href="https://hiddenroad.com/">
                  Hidden Road
                </LinkNewTab>
              </Typography>
              <Typography variant="h2">kevinjchen94@gmail.com</Typography>
              <Typography variant="h3">
                <LinkNewTab
                  href="https://www.linkedin.com/in/kevkevchen/"
                  sx={{
                    color: zenburnColors.subtext,
                    marginRight: "0.4rem",
                  }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </LinkNewTab>
                <LinkNewTab
                  href="/public/resume.pdf"
                  sx={{
                    color: zenburnColors.subtext,
                  }}
                >
                  <DescriptionIcon fontSize="inherit" />
                </LinkNewTab>
              </Typography>
              <Nav />
            </Grid>
            <Grid item md={4} xs={12}>
              <Github />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Intro;
