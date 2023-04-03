import { ReactNode } from "react";
interface Props {
    promoCards: {
        title: ReactNode;
        description: ReactNode;
        date: ReactNode;
        ctaRows: {
            buttonContent: ReactNode;
            buttonVariant: "contained" | "outlined" | "text";
            color: "primary" | "secondary";
            isLink: boolean;
        }[];
    }[];
}
declare const PromoCards: ({ promoCards }: Props) => JSX.Element;
export default PromoCards;
