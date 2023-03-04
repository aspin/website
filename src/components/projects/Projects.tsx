import React from "react";
import { Divider, List, ListItem, ListItemText, ThemeProvider, Typography } from "@mui/material";
import { light } from "../../theme/light";
import { Project } from "../../data/project";

interface ProjectProps {
  projects: Project[];
}

function Project(props: ProjectProps) {
  return (
    <ThemeProvider theme={light}>
      <Typography variant="h2">
        [projects]
      </Typography>
      <List>{props.projects.map((p) => project(p))}</List>
    </ThemeProvider>
  );
}

function project(p: Project) {
  return (
    <React.Fragment key={p.name}>
      <ListItem
        secondaryAction={
          <ListItemText
            primary={p.name}
          ></ListItemText>
        }
      >
      </ListItem>
      <Divider variant="inset" component="li"></Divider>
    </React.Fragment>
  );
}

export default Project;
