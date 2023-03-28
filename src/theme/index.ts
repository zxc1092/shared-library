import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import { acuraComponents, hondaComponents } from "./components";
import { acuraPalette, hondaPalette } from "./palette";
import { acuraTypography, hondaTypography } from "./typography";

export const hondaTheme = createTheme({
  name: "honda",
  ...hondaPalette,
  ...hondaTypography,
  ...breakpoints,
  ...hondaComponents,
});

export const acuraTheme = createTheme({
  name: "acura",
  ...acuraPalette,
  ...acuraTypography,
  ...breakpoints,
  ...acuraComponents,
});
