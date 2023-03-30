interface Props {
    title: string;
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    linkVariant: "contained" | "outlined" | "text";
}
declare const Hero: ({ title, description, image, imageText, linkText, linkVariant, }: Props) => JSX.Element;
export default Hero;
