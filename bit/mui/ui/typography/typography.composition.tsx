import React from 'react';
import { Typography } from './typography';
import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import { createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

const typographyVariants: any[] = [
  'title1',
  'title2',
  'title3',
  'title4',
  'title5',
  'body1',
  'body2',
  'body3',
  'body4',
  'body5',
];

const baseTypographyVariants: any[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'caption',
  'button',
  'overline',
];

export const BaseTypography = () => (
  <ThemeProvider>
    <Stack>
      {baseTypographyVariants.map((variant) => (
        <Typography variant={variant}>Obsess, Innovate, Repeat</Typography>
      ))}
    </Stack>
  </ThemeProvider>
);

export const Theme1Typography = () => (
  <ThemeProvider theme={createTheme(themeConfig1)}>
    <Stack>
      {typographyVariants.map((variant) => (
        <Typography variant={variant}>Obsess, Innovate, Repeat</Typography>
      ))}
    </Stack>
  </ThemeProvider>
);
export const Theme2Typography = () => (
  <ThemeProvider theme={createTheme(themeConfig2)}>
    <Stack>
      {typographyVariants.map((variant) => (
        <Typography variant={variant}>Obsess, Innovate, Repeat</Typography>
      ))}
    </Stack>
  </ThemeProvider>
);
