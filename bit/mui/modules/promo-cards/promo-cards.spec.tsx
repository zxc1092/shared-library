import React from 'react';
import { render } from '@testing-library/react';
import { BasicPromoCards } from './promo-cards.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPromoCards />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
