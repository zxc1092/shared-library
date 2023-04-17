import React from 'react';
import { render } from '@testing-library/react';
import { BasicPromoCards } from './promo-cards.composition';

it('should render with the correct text9', () => {
  const { getByText } = render(<BasicPromoCards />);
  const rendered = getByText('Post title');
  expect(rendered).toBeTruthy();
});
