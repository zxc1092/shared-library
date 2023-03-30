import "@fontsource/exo-2";
import "@fontsource/dosis";
import "@fontsource/material-icons";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { acuraTheme, hondaTheme } from "../src/theme";

/* snipped for brevity */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      Honda: hondaTheme,
      Acura: acuraTheme,
    },
    defaultTheme: "Acura",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
