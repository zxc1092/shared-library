import React from 'react';
import { render } from '@testing-library/react';
import { BasicHome } from './home.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHome />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
