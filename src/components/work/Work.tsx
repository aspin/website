import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import { Experience } from "../../data/experience";
import { light } from "../../theme/light";
import Section from "../section/Section";

interface WorkProps {
  experiences: Experience[];
}

function Work(props: WorkProps) {
  return (
    <Section id="work">
      <Typography variant="h2">[work]</Typography>
      <List>{props.experiences.map((exp) => experience(exp))}</List>
    </Section>
  );
}

function experience(exp: Experience) {
  return (
    <React.Fragment key={exp.company}>
      <ListItem
        sx={{
          marginBottom: "24px",
        }}
      >
        <Grid container>
          <Grid
            item
            sx={{
              marginRight: "24px",
            }}
          >
            <Avatar
              alt={exp.company}
              src={exp.image}
              sx={{
                height: "100px",
                width: "100px",
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h3">{exp.title}</Typography>
            <Typography variant="h4">{exp.company} / {exp.dates} / {exp.location}</Typography>
            {exp.description.map(desc => <Typography variant="body2">{desc}</Typography>)}
            {exp.tech.map(tech)}
          </Grid>
        </Grid>
      </ListItem>
    </React.Fragment>
  );
}

// TODO: add color picking
function tech(name: string) {
  return (
    <Chip
      label={name}
      variant="outlined"
      key={name}
      sx={{ marginRight: "8px" }}
    />
  );
}

export default Work;
