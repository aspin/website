import { Button, ButtonProps } from "@mui/material";
import React from "react";

function button(props: ButtonProps, content: string) {
  return (
    <Button
      variant="text"
      {...props}
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {content}
    </Button>
  );
}

export default function Nav() {
  return (
    <nav>
      {button({}, "About")}
      {button({}, "Work")}
      {button({}, "Projects")}
      {button({}, "Tech")}
    </nav>
  );
}
