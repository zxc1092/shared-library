declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("@storybook/types").Args>;
export default _default;
export declare const Primary: {
    args: {
        promoCards: {
            title: string;
            date: string;
            description: string;
            image: string;
            imageLabel: string;
            ctaRows: ({
                buttonContent: string;
                buttonVariant: "contained";
                color: "primary";
                isLink: boolean;
            } | {
                buttonContent: JSX.Element;
                buttonVariant: "contained";
                color: "secondary";
                isLink: boolean;
            })[];
        }[];
    };
};
