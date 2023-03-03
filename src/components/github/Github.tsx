import CodeIcon from "@mui/icons-material/Code";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

import { zenburnColors } from "../../theme/zenburn";

function Github() {
  return (
    <ListItem sx={{ color: zenburnColors.special }}>
      <ListItemAvatar>
        <Avatar>
          <CodeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="github.com/aspin" secondary="repos: 12" />
    </ListItem>
  );
}

export default Github;
