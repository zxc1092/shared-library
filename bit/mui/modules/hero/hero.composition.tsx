import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';
import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import React from 'react';
import { Hero } from './hero';

const props = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://picsum.photos/id/122/2000/500',
  imageText: 'main image description',
  ctaRow: [
    {
      buttonContent: 'Button',
      buttonVariant: 'contained' as 'contained',
      color: 'primary' as 'primary',
      isLink: false,
    },
    {
      buttonContent: <a href="google.com">Link</a>,
      buttonVariant: 'contained' as 'contained',
      color: 'secondary' as 'secondary',
      isLink: true,
    },
  ],
  color: 'white',
};

export const BaseHero = () => {
  return <Hero {...props} />;
};

export const Theme1Hero = () => (
  <ThemeProvider theme={createTheme(themeConfig1)}>
    <Stack>
      <Hero {...props} />
    </Stack>
  </ThemeProvider>
);

export const Theme2Hero = () => (
  <ThemeProvider theme={createTheme(themeConfig2)}>
    <Stack>
      <Hero {...props} />
    </Stack>
  </ThemeProvider>
);
