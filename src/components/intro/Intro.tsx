import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";

import { colors, zenburn } from "../../theme/zenburn";
import Nav from "../nav/Nav";
import Github from "../github/Github";

function Intro() {
  return (
    <ThemeProvider theme={zenburn}>
      <Box
        sx={{
          margin: "0",
          width: "100%",
          backgroundColor: colors.background,
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
                dev @ bloXroute Labs
              </Typography>
              <Typography variant="h2">
                kevinjchen94@gmail.com
              </Typography>
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