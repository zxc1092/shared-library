import React from 'react';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import { Button } from './button';
import { createTheme } from '@mui/material';

const ButtonSet = () => (
  <Stack gap="20px">
    <Stack flexDirection={'row'} gap="20px">
      <Button variant="contained" color="primary">
        contained primary
      </Button>
      <Button variant="outlined" color="primary">
        outlined primary
      </Button>
      <Button variant="text" color="primary">
        text primary
      </Button>
    </Stack>
    <Stack flexDirection={'row'} gap="20px">
      <Button variant="contained" color="secondary">
        contained secondary
      </Button>
      <Button variant="outlined" color="secondary">
        outlined secondary
      </Button>
      <Button variant="text" color="secondary">
        text secondary
      </Button>
    </Stack>
  </Stack>
);

export const BaseButton = () => <ButtonSet />;
export const Theme1Button = () => (
  <ThemeProvider theme={createTheme(themeConfig1)}>
    <ButtonSet />
  </ThemeProvider>
);
export const Theme2Button = () => (
  <ThemeProvider theme={createTheme(themeConfig2)}>
    <ButtonSet />
  </ThemeProvider>
);
