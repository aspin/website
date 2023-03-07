import CodeIcon from "@mui/icons-material/Code";
import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

import { zenburnColors } from "../../theme/zenburn";
import LinkNewTab from "../link_new_tab/LinkNewTab";

function Github() {
  return (
    <LinkNewTab
      href="https://github.com/aspin"
      sx={{
        textDecoration: "none",
      }}
    >
      <ListItem sx={{ color: zenburnColors.special }}>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="github.com/aspin" secondary="repos: 12" />
      </ListItem>
    </LinkNewTab>
  );
}

export default Github;
