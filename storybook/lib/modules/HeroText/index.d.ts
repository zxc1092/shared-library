interface Props {
    title: string;
    description: string;
    ctaRows: {
        text: string;
        variant: "contained" | "outlined" | "text";
    }[];
}
declare const HeroText: ({ title, description, ctaRows }: Props) => JSX.Element;
export default HeroText;
