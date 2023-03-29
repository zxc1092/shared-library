interface Props {
    promoCards: {
        title: string;
        description: string;
        date: string;
        image: string;
        imageText: string;
    }[];
}
declare const PromoCards: ({ promoCards }: Props) => JSX.Element;
export default PromoCards;
