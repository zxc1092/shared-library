import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  useTheme,
} from "@mui/material";

type TTypographyBaseProps = Pick<
  MuiTypographyProps,
  "align" | "variant" | "color" | "noWrap"
>;

export interface ITypographyProps extends TTypographyBaseProps {
  label?: string;
  isDark?: boolean;
  onClick?: () => void;
}

const Typography = ({ label, isDark, ...rest }: ITypographyProps) => {
  const theme = useTheme();
  return <MuiTypography {...rest}>{label || theme.name}</MuiTypography>;
};

export default Typography;
