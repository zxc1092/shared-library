import { ButtonProps as MuiButtonProps } from "@mui/material";
type TButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color" | "children" | "onClick">;
export interface IButtonProps extends TButtonBaseProps {
    isLink?: boolean;
}
declare function Button({ children, isLink, ...rest }: IButtonProps): JSX.Element;
export default Button;
