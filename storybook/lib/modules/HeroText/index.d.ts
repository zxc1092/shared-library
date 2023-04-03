import { ReactNode } from "react";
interface Props {
    title: ReactNode;
    description: ReactNode;
    ctaRows: {
        buttonContent: ReactNode;
        buttonVariant: "contained" | "outlined" | "text";
        color: "primary" | "secondary";
        isLink: boolean;
    }[];
}
declare const HeroText: ({ title, description, ctaRows }: Props) => JSX.Element;
export default HeroText;
