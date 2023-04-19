import React from 'react';
import { ThemeProvider } from './theme-provider';
import { createTheme } from '@mui/material';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import Button from '@mui/material/Button';

export const ThemeBaseProvider = () => {
  return (
    <ThemeProvider>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </ThemeProvider>
  );
};
export const Theme1Provider = () => {
  return (
    <ThemeProvider theme={createTheme(themeConfig1)}>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </ThemeProvider>
  );
};

export const Theme2Provider = () => {
  return (
    <ThemeProvider theme={createTheme(themeConfig2)}>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </ThemeProvider>
  );
};
