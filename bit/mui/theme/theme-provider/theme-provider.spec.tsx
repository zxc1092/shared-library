import React from 'react';
import { render } from '@testing-library/react';
import { Theme1Provider } from './theme-provider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Theme1Provider />);
  const rendered = getByText('Button');
  expect(rendered).toBeTruthy();
});
