import { TypographyProps as MuiTypographyProps } from "@mui/material";
type TTypographyBaseProps = Pick<MuiTypographyProps, "align" | "variant" | "color" | "noWrap">;
export interface ITypographyProps extends TTypographyBaseProps {
    label?: string;
    isDark?: boolean;
    onClick?: () => void;
}
declare const Typography: ({ label, isDark, ...rest }: ITypographyProps) => JSX.Element;
export default Typography;
