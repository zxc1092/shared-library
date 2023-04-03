import { ReactNode } from "react";
interface Props {
    title: ReactNode;
    description: ReactNode;
    image: string;
    imageText: string;
    ctaRow: {
        buttonContent: ReactNode;
        buttonVariant: "contained" | "outlined" | "text";
        color: "primary" | "secondary";
        isLink: boolean;
    }[];
    color: string;
}
declare const Hero: ({ title, description, image, imageText, ctaRow, color, }: Props) => JSX.Element;
export default Hero;
