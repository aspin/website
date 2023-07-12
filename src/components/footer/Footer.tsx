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
            paddingTop: "1em",
            paddingBottom: "1em",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography variant="body1">
                You can find the source code for this website{" "}
                <LinkNewTab href="https://github.com/aspin/website">
                  here.
                </LinkNewTab>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
