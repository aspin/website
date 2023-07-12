import { Avatar, Chip, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

import { Project } from "../../data/project";
import LinkNewTab from "../link_new_tab/LinkNewTab";
import Section from "../section/Section";

interface ProjectProps {
  projects: Project[];
}

function Projects(props: ProjectProps) {
  return (
    <Section id="projects">
      <Typography variant="h2">[projects]</Typography>
      <Typography variant="body1">
        I have many complete and incomplete projects.
      </Typography>
      <List>{props.projects.map((p) => project(p))}</List>
    </Section>
  );
}

function project(p: Project) {
  let name = <Typography variant="h3">{p.name}</Typography>;
  if (p.link !== "") {
    name = <LinkNewTab href={p.link}>{name}</LinkNewTab>;
  }

  let avatar = (
    <Avatar
      sx={{
        height: "100px",
        width: "100px",
        marginBottom: "1em",
      }}
    >
      {p.name[0].toLowerCase()}
    </Avatar>
  );
  if (p.image !== "") {
    avatar = (
      <Avatar
        sx={{
          height: "100px",
          width: "100px",
          marginBottom: "1em",
        }}
        alt={p.name}
        src={p.image}
      />
    );
  }

  return (
    <ListItem
      sx={{
        marginBottom: "24px",
      }}
      key={p.name}
    >
      <Grid container>
        <Grid
          item
          sx={{
            marginRight: "24px",
          }}
        >
          {avatar}
        </Grid>
        <Grid item xs={12} sm={10}>
          {name}
          <Typography variant="h4">{p.company}</Typography>
          {p.description.map((desc) => (
            <Typography variant="body2">{desc}</Typography>
          ))}
          {p.keywords.map(kw)}
        </Grid>
      </Grid>
    </ListItem>
  );
}

function kw(name: string) {
  return (
    <Chip
      label={name}
      variant="outlined"
      key={name}
      sx={{ marginRight: "8px" }}
    />
  );
}

export default Projects;
