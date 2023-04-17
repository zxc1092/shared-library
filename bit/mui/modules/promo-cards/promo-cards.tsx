import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@zxc1092/mui.ui.typography';

export type PromoCardsProps = {
  cards: {
    title: ReactNode;
    description: ReactNode;
    date: ReactNode;
    ctaRows: {
      buttonContent: ReactNode;
      buttonVariant: 'contained' | 'outlined' | 'text';
      color: 'primary' | 'secondary';
      isLink: boolean;
    }[];
  }[];
};

export const PromoCards = ({ cards }: PromoCardsProps) => {
  return (
    <Grid container spacing={4}>
      {cards.map((promo, index) => (
        <Grid key={`promoCards${index}`} item xs={12} md={6}>
          <Stack sx={{ display: 'flex' }}>
            <Stack
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography component="h3" variant="title3">
                {promo.title}
              </Typography>
              <Typography component="span" variant="body2">
                {promo.date}
              </Typography>
              <Typography component="p" variant="body3">
                {promo.description}
              </Typography>
              <Typography component="p" variant="body1" color="primary">
                Continue reading...
              </Typography>
            </Stack>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image="https://source.unsplash.com/random"
              alt="random"
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
