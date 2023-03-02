import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

import { Experience } from "../../data/experience";

interface ExperiencesProps {
  experiences: Experience[];
}

function Experiences(props: ExperiencesProps) {
  return <List>{props.experiences.map((exp) => experience(exp))}</List>;
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

export default Experiences;
