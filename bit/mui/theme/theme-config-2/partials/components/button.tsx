import { ComponentsOverrides, ComponentsVariants } from '@mui/material';

export const button: {
  MuiButton: {
    styleOverrides: ComponentsOverrides['MuiButton'];
    variants: ComponentsVariants['MuiButton'];
  };
} = {
  MuiButton: {
    styleOverrides: {
      root: {
        '&>a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: {
          padding: '9px 24px',
          borderRadius: '19px',
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          padding: '9px 24px',
          borderRadius: '19px',
        },
      },
      {
        props: { variant: 'text' },
        style: {
          padding: '5px',
          borderRadius: 0,
        },
      },
    ],
  },
};
