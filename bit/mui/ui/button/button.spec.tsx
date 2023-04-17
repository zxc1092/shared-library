import React from 'react';
import { render } from '@testing-library/react';
import { BaseButton } from './button.composition';

test('should render with the correct text7', () => {
  const { getByText } = render(<BaseButton />);
  const rendered = getByText('contained primary');
  expect(rendered).toBeTruthy();
});
