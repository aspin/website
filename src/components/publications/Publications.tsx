import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import { Avatar, Chip, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

import { Publication } from "../../data/publication";
import LinkNewTab from "../link_new_tab/LinkNewTab";
import Section from "../section/Section";

interface PublicationProps {
  publications: Publication[];
}

function Publications(props: PublicationProps) {
  return (
    <Section id="publications">
      <Typography variant="h2">[publications]</Typography>
      <List>{props.publications.map((p, i) => publication(p, i))}</List>
    </Section>
  );
}

function publication(p: Publication, i: number) {
  return (
    <ListItem
      sx={{
        marginBottom: "24px",
      }}
      key={i}
    >
      <Grid container>
        <Typography variant="body2">{p.citation}</Typography>
        {link(p.paperLink, "paper", <ArticleIcon />)}
        {p.codeLink && link(p.codeLink, "code", <CodeIcon />)}
      </Grid>
    </ListItem>
  );
}

function link(link: string, label: string, icon: JSX.Element) {
  return (
    <LinkNewTab
      href={link}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
        "& > *:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Chip
        avatar={<Avatar>{icon}</Avatar>}
        label={label}
        color="primary"
        variant="outlined"
        sx={{ marginRight: "8px" }}
      />
    </LinkNewTab>
  );
}

export default Publications;
