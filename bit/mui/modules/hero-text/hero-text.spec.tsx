import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeroText } from './hero-text.composition';

it('should render with the correct text12', () => {
  const { getByText } = render(<BasicHeroText />);
  const rendered = getByText('Album layout');
  expect(rendered).toBeTruthy();
});
