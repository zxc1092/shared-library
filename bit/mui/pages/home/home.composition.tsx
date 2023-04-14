import React from 'react';
import { Home } from './home';
import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import { createTheme } from '@mui/material/styles';

export const BasicHome = () => {
  return <Home />;
};
export const Theme1Home = () => {
  return (
    <ThemeProvider theme={createTheme(themeConfig1)}>
      <Home themeName="acura" />
    </ThemeProvider>
  );
};
export const Theme2Home = () => {
  return (
    <ThemeProvider theme={createTheme(themeConfig2)}>
      <Home themeName="acura" />
    </ThemeProvider>
  );
};
