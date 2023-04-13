import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Image from 'mui-image';
import Stack from '@mui/material/Stack';
import { Typography } from '@zxc1092/mui.ui.typography';
import { Button } from '@zxc1092/mui.ui.button';

interface HeroProps {
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageText: string;
  ctaRow: {
    buttonContent: ReactNode;
    buttonVariant: 'contained' | 'outlined' | 'text';
    color: 'primary' | 'secondary';
    isLink: boolean;
  }[];
  color: string;
}

export const Hero = ({
  title,
  description,
  image,
  imageText,
  ctaRow,
  color,
}: HeroProps) => {
  const handleHeroClick = () => {
    alert('Hero Action');
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: color,
        mb: 4,
      }}
    >
      <Image src={image} alt={imageText} width="100%" height="400px" />
      <Stack
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0"
        p={5}
        height="100%"
        width="40%"
        gap={2}
      >
        <Typography component="h1" variant="title1" color="inherit">
          {title}
        </Typography>
        <Typography variant="body1" color="inherit">
          {description}
        </Typography>
        <Stack direction="row" gap={2}>
          {ctaRow.map(({ buttonVariant, buttonContent, isLink, color }) => (
            <Button
              variant={buttonVariant}
              onClick={isLink ? undefined : handleHeroClick}
              color={color}
              isLink={isLink}
            >
              {buttonContent}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};
