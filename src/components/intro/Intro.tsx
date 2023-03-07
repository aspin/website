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
            <Grid item xs={8}>
              <Typography variant="h1">Kevin Chen</Typography>
              <Typography variant="h2">
                dev @{" "}
                <LinkNewTab href="https://bloxroute.com/">
                  bloXroute Labs
                </LinkNewTab>
              </Typography>
              <Typography variant="h2">kevinjchen94@gmail.com</Typography>
              <Nav />
            </Grid>
            <Grid item xs={4}>
              <Github />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Intro;