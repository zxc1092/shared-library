declare const _default: {
    title: string;
    component: ({ label, isDark, ...rest }: import(".").IButtonProps) => JSX.Element;
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
export declare const Base: {};
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
        label: string;
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
        label: string;
    };
};
