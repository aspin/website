import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import { Expertise } from "../../data/expertise";
import { light } from "../../theme/light";

interface TechProps {
  recentExpertise: Expertise[];
  expertise: Expertise[];
}

function Tech(props: TechProps) {
  return (
    <ThemeProvider theme={light}>
      <Typography variant="h2">[tech]</Typography>
      <Typography variant="h3">most recent</Typography>
      <List>{props.recentExpertise.map((exp) => expertise(exp))}</List>
      <Typography variant="h3">others</Typography>
      <List>{props.expertise.map((exp) => expertise(exp))}</List>
    </ThemeProvider>
  );
}

function expertise(exp: Expertise) {
  return (
    <React.Fragment key={exp.name}>
      <ListItem>
        <ListItemText
          primary={exp.name}
        ></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li"></Divider>
    </React.Fragment>
  );
}

export default Tech;
