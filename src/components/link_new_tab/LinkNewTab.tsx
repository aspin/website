import { Link } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import React, { PropsWithChildren } from "react";

interface LinkNewTabProps {
  href: string;
  sx?: SxProps<Theme>;
}

function LinkNewTab(props: PropsWithChildren<LinkNewTabProps>) {
  return (
    <Link href={props.href} target="_blank" rel="noreferrer" sx={props.sx}>
      {props.children}
    </Link>
  );
}

export default LinkNewTab;
