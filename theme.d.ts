declare module "@mui/material/styles" {
  interface CustomTheme {
    name: string;
  }
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
    title5: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    title4?: React.CSSProperties;
    title5?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
  }

  export interface Theme extends CustomTheme {}
  export interface ThemeOptions extends CustomTheme {}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    title5: true;
    body1: true;
    body2: true;
    body3: true;
    body4: true;
    body5: true;
  }
}

export {};
