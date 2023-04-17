import React from 'react';
import { render } from '@testing-library/react';
import { BasicNavbar } from './navbar.composition';

it('should render with the correct text10', () => {
  const { getByText } = render(<BasicNavbar />);
  const rendered = getByText('Logo');
  expect(rendered).toBeTruthy();
});
