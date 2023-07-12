import { Box, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { light } from "../../theme/light";

interface SectionProps {
  id: string
}

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <Box id={props.id} component="section" sx={{
      paddingTop: "3em",
      marginBottom: "2em"
    }}>
      <ThemeProvider theme={light}>
        {props.children}
      </ThemeProvider>
    </Box>
  );
}

export default Section;
