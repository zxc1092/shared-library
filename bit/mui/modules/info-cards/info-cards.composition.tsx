import React from 'react';
import { InfoCards } from './info-cards';

const cards = [
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
];

export const BasicInfoCards = () => {
  return <InfoCards cards={cards} />;
};
