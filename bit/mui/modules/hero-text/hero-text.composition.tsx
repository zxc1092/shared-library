import React from 'react';
import { HeroText } from './hero-text';

const props = {
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
};

export const BasicHeroText = () => {
  return <HeroText {...props} />;
};
