import React from 'react';
import { render } from '@testing-library/react';
import { BasicInfoCards } from './info-cards.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInfoCards />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
