import Button from ".";
declare const _default: {
    title: string;
    component: typeof Button;
    tags: never[];
    argTypes: {
        color: {
            control: string;
            options: string[];
        };
        variant: {
            control: string;
            options: string[];
            description: string;
        };
        label: {
            control: string;
        };
    };
};
export default _default;
export declare const Base: {
    args: {
        color: string;
        variant: string;
        children: string;
    };
};
export declare const Primary: {
    argTypes: {
        color: {
            table: {
                disable: boolean;
            };
        };
    };
    args: {
        color: string;
        variant: string;
        children: string;
    };
};
export declare const Secondary: {
    argTypes: {
        color: {
            table: {
                disable: boolean;
            };
        };
    };
    args: {
        color: string;
        variant: string;
        children: string;
    };
};
