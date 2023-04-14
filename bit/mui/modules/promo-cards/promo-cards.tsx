import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
      {cards.map((promo) => (
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent
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
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};
