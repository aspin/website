import { Grid, Typography } from "@mui/material";
import React from "react";

function Intro() {
  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Typography variant="h4">Kevin Chen | @aspin</Typography>
        <Typography variant="h5">dev @ bloXroute Labs</Typography>
      </Grid>
      <Grid xs={4}>link to github</Grid>
    </Grid>
  );
}

export default Intro;
