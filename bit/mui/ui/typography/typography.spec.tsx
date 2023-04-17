import React from 'react';
import { render } from '@testing-library/react';
import { BaseTypography } from './typography.composition';

it('should render with the correct text1', () => {
  const { getByText } = render(<BaseTypography />);
  const rendered = getByText('Base Obsess, Innovate, Repeat: h1');
  expect(rendered).toBeTruthy();
});
