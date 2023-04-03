import { ReactNode } from "react";
interface Props {
    cards: {
        title: ReactNode;
        description: ReactNode;
        ctaRows: {
            buttonContent: ReactNode;
            buttonVariant: "contained" | "outlined" | "text";
            color: "primary" | "secondary";
            isLink: boolean;
        }[];
    }[];
}
declare const infoCards: ({ cards }: Props) => JSX.Element;
export default infoCards;
