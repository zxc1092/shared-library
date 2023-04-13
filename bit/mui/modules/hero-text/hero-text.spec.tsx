import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeroText } from './hero-text.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHeroText />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
