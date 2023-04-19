import React, { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  Theme as MuiTheme,
} from '@mui/material/styles';
import '@fontsource/dosis';
import '@fontsource/exo-2';

export type ThemeSchema = {} & MuiTheme;

export type ThemeProviderProps = {
  theme?: ThemeSchema;
  children: ReactNode;
};

export function ThemeProvider({
  /* the default theme will be created in the next step */
  theme,
  children,
}: ThemeProviderProps) {
  return theme ? (
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  ) : (
    <>{children}</>
  );
}
