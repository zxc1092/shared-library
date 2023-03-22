import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";
import { useStyles } from "./index.styles";

type TButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface IButtonProps extends TButtonBaseProps {
  label?: string;
  isDark?: boolean;
  onClick?: () => void;
}

export const Button = ({ label, isDark, ...rest }: IButtonProps) => {
  const theme = useTheme();
  const classes = useStyles({ isDark });
  return (
    <>
      <MuiButton className={classes.base} disableRipple {...rest}>
        {label || theme.name}
      </MuiButton>
    </>
  );
};
