import React from 'react';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import { Button } from './jss-button';
import { createTheme } from '@mui/material';

const ButtonSet = () => (
  <Stack gap="20px">
    <Stack flexDirection={'row'} gap="20px">
      <Button
        variant="contained"
        color="primary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Contained Primary',
          },
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Outlined Primary',
          },
        }}
      />
      <Button
        variant="text"
        color="primary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Text Primary',
          },
        }}
      />
    </Stack>
    <Stack flexDirection={'row'} gap="20px">
      <Button
        variant="contained"
        color="secondary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Contained secondary',
          },
        }}
      />
      <Button
        variant="outlined"
        color="secondary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Outlined Secondary',
          },
        }}
      />
      <Button
        variant="text"
        color="secondary"
        field={{
          value: {
            href: 'https://google.com',
            text: 'Text Secondary',
          },
        }}
      />
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
