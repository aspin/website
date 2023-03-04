import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider, Typography,
} from "@mui/material";
import React from "react";

import { Experience } from "../../data/experience";
import { light } from "../../theme/light";

interface WorkProps {
  experiences: Experience[];
}

function Work(props: WorkProps) {
  return (
    <ThemeProvider theme={light}>
      <Typography variant="h2">
        [work]
      </Typography>
      <List>{props.experiences.map((exp) => experience(exp))}</List>
    </ThemeProvider>
  );
}

function experience(exp: Experience) {
  return (
    <React.Fragment key={exp.company}>
      <ListItem
        secondaryAction={
          <ListItemText
            primary={exp.description}
            secondary={exp.dates}
          ></ListItemText>
        }
      >
        <ListItemAvatar>
          <Avatar alt={exp.company} src={exp.image} />
        </ListItemAvatar>
        <ListItemText
          primary={exp.company}
          secondary={exp.title}
        ></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li"></Divider>
    </React.Fragment>
  );
}

export default Work;
