import { Theme } from "@mui/material";
export declare const hondaComponents: {
    components: {
        MuiButton: {
            variants: {
                props: Partial<import("@mui/material").ButtonProps<"button", {}>>;
                style: import("@mui/styled-engine").Interpolation<{
                    theme: Theme;
                }>;
            }[] | undefined;
        };
    };
};
export declare const acuraComponents: {
    components: {
        MuiButton: {
            styleOverrides: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ButtonClasses, "MuiButton", unknown>> | undefined;
            variants: {
                props: Partial<import("@mui/material").ButtonProps<"button", {}>>;
                style: import("@mui/styled-engine").Interpolation<{
                    theme: Theme;
                }>;
            }[] | undefined;
        };
    };
};
