import React from "react";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
type TTypographyBaseProps = Pick<MuiTypographyProps, "align" | "variant" | "color" | "noWrap" | "children">;
export interface ITypographyProps extends TTypographyBaseProps {
    component?: React.ElementType;
}
declare const Typography: ({ children, component, ...rest }: ITypographyProps) => JSX.Element;
export default Typography;
