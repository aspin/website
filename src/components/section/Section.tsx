import { Box, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { light } from "../../theme/light";

interface SectionProps {
}

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <Box component="section" sx={{
      marginBottom: "3em"
    }}>
      <ThemeProvider theme={light}>
        {props.children}
      </ThemeProvider>
    </Box>
  );
}

export default Section;
