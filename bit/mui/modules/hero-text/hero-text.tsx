import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@zxc1092/mui.ui.typography';
import { Button } from '@zxc1092/mui.ui.button';

export interface HeroTextProps {
  title: ReactNode;
  description: ReactNode;
  ctaRows: {
    buttonContent: ReactNode;
    buttonVariant: 'contained' | 'outlined' | 'text';
    color: 'primary' | 'secondary';
    isLink: boolean;
  }[];
}

export const HeroText = ({ title, description, ctaRows }: HeroTextProps) => {
  return (
    <Container maxWidth="sm" sx={{ p: 4 }}>
      <Typography
        component="h2"
        variant="title1"
        align="center"
        color="text.primary"
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        color="secondary"
      >
        {description}
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        {ctaRows?.map(
          ({ buttonContent, buttonVariant, color, isLink }, index) => (
            <Button
              key={`hero-${index}`}
              variant={buttonVariant}
              color={color}
              isLink={isLink}
            >
              {buttonContent}
            </Button>
          )
        )}
      </Stack>
    </Container>
  );
};
