import { Box, Button, ButtonProps, Link } from "@mui/material";
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
      <Link href={`#${content}`}>{content}</Link>
    </Button>
  );
}

export default function Nav() {
  return (
    <Box sx={{marginTop: "1em"}} component="nav">
      {button({}, "work")}
      {button({}, "tech")}
      {button({}, "about")}
      {button({}, "projects")}
      {button({}, "publications")}
    </Box>
  );
}
