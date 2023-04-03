declare const homepageData: {
    hero: {
        title: string;
        description: string;
        image: string;
        imageText: string;
        ctaRow: ({
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
        color: string;
    };
    heroText: {
        title: string;
        description: string;
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
    };
    infoCards: {
        title: string;
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
export default homepageData;
