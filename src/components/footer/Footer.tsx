import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";

import { zenburn, zenburnColors } from "../../theme/zenburn";
import LinkNewTab from "../link_new_tab/LinkNewTab";

function Footer() {
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
            paddingTop: "4em",
          }}
        >
          <Grid container rowSpacing={6} columnSpacing={2} alignItems="center">
            <Typography variant="body1">
              You can find the source code for this website{" "}
              <LinkNewTab href="https://github.com/aspin/website">
                here.
              </LinkNewTab>
            </Typography>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
