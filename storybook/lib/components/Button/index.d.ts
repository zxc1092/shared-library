import { ButtonProps as MuiButtonProps } from "@mui/material";
type TButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color" | "sx">;
export interface IButtonProps extends TButtonBaseProps {
    label?: string;
    isDark?: boolean;
    onClick?: () => void;
}
declare const Button: ({ label, isDark, ...rest }: IButtonProps) => JSX.Element;
export default Button;
