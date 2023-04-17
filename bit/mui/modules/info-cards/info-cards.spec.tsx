import React from 'react';
import { render } from '@testing-library/react';
import { BasicInfoCards } from './info-cards.composition';

it('should render with the correct text11', () => {
  const { getByText } = render(<BasicInfoCards />);
  const rendered = getByText('Post title');
  expect(rendered).toBeTruthy();
});
