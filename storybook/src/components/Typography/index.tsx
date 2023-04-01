import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  useTheme,
} from "@mui/material";

type TTypographyBaseProps = Pick<
  MuiTypographyProps,
  "align" | "variant" | "color" | "noWrap" | "children"
>;

export interface ITypographyProps extends TTypographyBaseProps {
  component?: React.ElementType;
}

const Typography = ({ children, component, ...rest }: ITypographyProps) => {
  return (
    <MuiTypography {...rest} component={component || "span"}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
