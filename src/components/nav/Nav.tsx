import { Box, Button, ButtonProps } from "@mui/material";
import React from "react";

function button(props: ButtonProps, content: string) {
  return (
    <Button
      variant="text"
      {...props}
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
        minWidth: 0,
        marginRight: "1em",
      }}
    >
      {content}
    </Button>
  );
}

export default function Nav() {
  return (
    <Box sx={{marginTop: "1em"}} component="nav">
      {button({}, "About")}
      {button({}, "Work")}
      {button({}, "Projects")}
      {button({}, "Tech")}
    </Box>
  );
}
