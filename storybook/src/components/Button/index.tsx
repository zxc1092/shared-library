import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";

type TButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "children" | "onClick"
>;

export interface IButtonProps extends TButtonBaseProps {
  isLink?: boolean;
}

function Button({ children, isLink, ...rest }: IButtonProps) {
  return (
    <MuiButton component={isLink ? "span" : "button"} disableRipple {...rest}>
      {children}
    </MuiButton>
  );
}

export default Button;
