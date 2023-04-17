import React from 'react';
import { render } from '@testing-library/react';
import { BaseHero } from './hero.composition';

it('should render with the correct text13', () => {
  const { getByText } = render(<BaseHero />);
  const rendered = getByText('Title of a longer featured blog post');
  expect(rendered).toBeTruthy();
});
