import React from 'react';
import { render } from '@testing-library/react';
import { BasicHome } from './home.composition';

it('should render with the correct text8', () => {
  const { getByText } = render(<BasicHome />);
  const rendered = getByText('Logo');
  expect(rendered).toBeTruthy();
});
