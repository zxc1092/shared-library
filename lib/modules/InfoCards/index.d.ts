interface Props {
    cards: {
        title: string;
        description: string;
        ctaRows: {
            text: string;
            variant: "contained" | "outlined" | "text";
        }[];
    }[];
}
declare const infoCards: ({ cards }: Props) => JSX.Element;
export default infoCards;
