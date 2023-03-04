import React from "react";
import { Expertise } from "../../data/expertise";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { light } from "../../theme/light";

interface TechProps {
  expertise: Expertise[]
}

function Tech(props: TechProps) {
  return (
    <ThemeProvider theme={light}>
      <Typography variant="h2">
        [tech]
      </Typography>
      <List>{props.expertise.map((exp) => expertise(exp))}</List>
    </ThemeProvider>
  );
}

function expertise(exp: Expertise) {
  return (
    <React.Fragment key={exp.name}>
      <ListItem
        secondaryAction={
          <ListItemText
            primary={exp.name}
          ></ListItemText>
        }
      >
      </ListItem>
      <Divider variant="inset" component="li"></Divider>
    </React.Fragment>
  )
}

export default Tech;