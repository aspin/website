import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";

import github from "../../assets/img/github.png";
import { zenburnColors } from "../../theme/zenburn";
import LinkNewTab from "../link_new_tab/LinkNewTab";

function Github() {
  return (
    <Paper>
      <LinkNewTab
        href="https://github.com/aspin"
        sx={{
          textDecoration: "none",
        }}
      >
        <ListItem sx={{ color: zenburnColors.special }}>
          <ListItemAvatar>
            <Avatar src={github}>{/*<CodeIcon />*/}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="github.com/aspin" />
        </ListItem>
      </LinkNewTab>
    </Paper>
  );
}

export default Github;