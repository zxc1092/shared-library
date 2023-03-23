import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  useTheme,
} from "@mui/material";
import { useStyles } from "./index.styles";

type TTypographyBaseProps = Pick<
  MuiTypographyProps,
  "align" | "variant" | "color"
>;

export interface ITypographyProps extends TTypographyBaseProps {
  label?: string;
  isDark?: boolean;
  onClick?: () => void;
}

export const Typography = ({ label, isDark, ...rest }: ITypographyProps) => {
  const theme = useTheme();
  const classes = useStyles({ isDark });
  return (
    <>
      <MuiTypography className={classes.base} {...rest}>
        {label || theme.name}
      </MuiTypography>
    </>
  );
};
