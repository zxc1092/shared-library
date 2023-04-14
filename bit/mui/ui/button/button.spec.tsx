import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryOutlinedButton } from './button.composition';

test('should render with the correct text', () => {
  const { getByText } = render(<PrimaryOutlinedButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
