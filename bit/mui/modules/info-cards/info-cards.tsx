import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@zxc1092/mui.ui.typography';
import { Button } from '@zxc1092/mui.ui.button';

export interface InfoCardsProps {
  cards: {
    title: ReactNode;
    description: ReactNode;
    ctaRows: {
      buttonContent: ReactNode;
      buttonVariant: 'contained' | 'outlined' | 'text';
      color: 'primary' | 'secondary';
      isLink: boolean;
    }[];
  }[];
}

export const InfoCards = ({ cards }: InfoCardsProps) => {
  return (
    <Grid container spacing={4}>
      {cards.map((card, index) => (
        <Grid item key={`infoCard-${index}`} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 1,
              }}
            >
              <Typography variant="title3" component="h3">
                {card.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
