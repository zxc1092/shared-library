import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface CustomTheme {
    name: string;
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const hondaTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007cc0",
    },
    secondary: {
      main: "#e42525",
    },
  },
  name: "honda",
});

export const acuraTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e82c2a",
    },
    secondary: {
      main: "#000000",
    },
  },
  name: "acura",
});
