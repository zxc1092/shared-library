import Container from '@mui/material/Container';
import React from 'react';

import { Navbar } from '@zxc1092/mui.modules.navbar';
import { Hero } from '@zxc1092/mui.modules.hero';
import { HeroText } from '@zxc1092/mui.modules.hero-text';
import { PromoCards } from '@zxc1092/mui.modules.promo-cards';
import { InfoCards } from '@zxc1092/mui.modules.info-cards';
interface IHeaderColor {
  [key: string]: 'primary' | 'secondary';
}

const headerColor: IHeaderColor = {
  base: 'primary',
  acura: 'secondary',
  honda: 'primary',
};

const homepageData = {
  hero: {
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
  },
  heroText: {
    title: 'Album layout',
    description:
      'Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.',
    ctaRows: [
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
  },
  infoCards: [
    {
      title: 'Post title',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      ctaRows: [
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
    },
    {
      title: 'Featured post',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      ctaRows: [
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
    },
    {
      title: 'Post title',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      ctaRows: [
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
    },
  ],
  promoCards: [
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      ctaRows: [
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
    },
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      ctaRows: [
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
    },
  ],
};

export interface HomeProps {
  themeName?: 'acura' | 'honda';
}

export const Home = ({ themeName }: HomeProps) => {
  return (
    <article>
      <Navbar color={headerColor[themeName || 'base']} />
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Hero {...homepageData.hero} />
        <HeroText {...homepageData.heroText} />
      </Container>
    </article>
  );
};
