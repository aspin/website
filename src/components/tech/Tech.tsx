import { Box, Chip, ListItem, TextField, Typography } from "@mui/material";
import React from "react";

import { Expertise } from "../../data/expertise";
import Section from "../section/Section";

interface TechProps {
  recentExpertise: Expertise[];
  expertise: Expertise[];
}

function Tech(props: TechProps) {
  let [filter, setFilter] = React.useState("");
  return (
    <Section id="tech">
      <Typography variant="h2">[tech]</Typography>
      <Typography variant="body1">
        I'm listing some of the tech I worked most extensively with here.
      </Typography>
      <Typography variant="body1">
        Standard disclaimer: this list is not exhaustive, since I'm just doing
        my best to recall things from memory and am constantly seeking out new
        things to keep me interested :)
      </Typography>
      <TextField
        label="filter"
        fullWidth
        variant="filled"
        sx={{ marginBottom: "1em" }}
        onChange={(evt) => {
          setFilter(evt.target.value);
        }}
      />
      <Typography variant="body1">
        These are the tools I've worked with most recently:
      </Typography>
      {expertise(props.recentExpertise, filter)}
      <Typography variant="body1">
        Some more that I've worked with in the past:
      </Typography>
      {expertise(props.expertise, filter)}
    </Section>
  );
}

function expertise(expertise: Expertise[], filter: string) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
      }}
      component="ul"
    >
      {expertise
        .filter((exp) => exp.name.includes(filter))
        .map((exp, index) => expertItem(exp, index))}
    </Box>
  );
}

function expertItem(exp: Expertise, index: number) {
  return (
    <ListItem key={index} sx={{ width: "auto" }}>
      <Chip label={exp.name}></Chip>
    </ListItem>
  );
}

export default Tech;
