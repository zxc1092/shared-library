import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

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

  // allow configuration using `createTheme`
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

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    title5: true;
    pargraph1: true;
    pargraph2: true;
    pargraph3: true;
    pargraph4: true;
    pargraph5: true;
  }
}

const fonts = {
  title1: {
    fontSize: "36px",
    letterSpacing: "1.08px",
    lineHeight: "40px",
    fontWeight: "bold",
  },
  title2: {
    fontSize: "32px",
    letterSpacing: ".96px",
    lineHeight: "36px",
    fontWeight: "bold",
  },
  title3: {
    fontSize: "28px",
    letterSpacing: ".84px",
    lineHeight: "32px",
    fontWeight: "bold",
  },
  title4: {
    fontSize: "24px",
    letterSpacing: ".72px",
    lineHeight: "28px",
    fontWeight: "bold",
  },
  title5: {
    fontSize: "20px",
    letterSpacing: ".6px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  body1: {
    fontSize: "20px",
    letterSpacing: "normal",
    lineHeight: "24px",
  },
  body2: {
    fontSize: "18px",
    letterSpacing: "normal",
    lineHeight: "20px",
  },
  body3: {
    fontSize: "16px",
    letterSpacing: "normal",
    lineHeight: "18px",
  },
  body4: {
    fontSize: "14px",
    letterSpacing: "normal",
    lineHeight: "16px",
  },
  body5: {
    fontSize: "12px",
    letterSpacing: "normal",
    lineHeight: "14px",
  },
};

export const hondaTheme = createTheme({
  name: "honda",
  palette: {
    mode: "light",
    primary: {
      main: "#007cc0",
    },
    secondary: {
      main: "#e42525",
    },
  },
  typography: {
    fontFamily: '"Dosis", sans-serif',
    ...fonts,
  },
  breakpoints: {
    values: {
      xs: 550,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 1800,
    },
  },
});

export const acuraTheme = createTheme({
  name: "acura",
  palette: {
    mode: "light",
    primary: {
      main: "#e82c2a",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: '"Exo 2", sans-serif',
    ...fonts,
  },
  breakpoints: {
    values: {
      xs: 550,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 1800,
    },
  },
});
