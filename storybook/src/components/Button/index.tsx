import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";

type TButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "size" | "color" | "sx"
>;

export interface IButtonProps extends TButtonBaseProps {
  label?: string;
  isDark?: boolean;
  onClick?: () => void;
}

const Button = ({ label, isDark, ...rest }: IButtonProps) => {
  const theme = useTheme();
  return (
    <>
      <MuiButton disableRipple {...rest}>
        {label || theme.name}
      </MuiButton>
    </>
  );
};

export default Button;
