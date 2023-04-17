import React from 'react';
import { render } from '@testing-library/react';
import { BaseButton } from './jss-button.composition';

it('should render with the correct text6', () => {
  const { getByText } = render(<BaseButton />);
  const rendered = getByText('Contained Primary');
  expect(rendered).toBeTruthy();
});

it('should render with the correct text2', () => {
  const { getByText } = render(<BaseButton />);
  const rendered = getByText('Contained Primary');
  expect(rendered).toBeTruthy();
});

it('should render with the correct text3', () => {
  const { getByText } = render(<BaseButton />);
  const rendered = getByText('Contained Primary');
  expect(rendered).toBeTruthy();
});

it('should render with the correct text4', () => {
  const { getByText } = render(<BaseButton />);
  const rendered = getByText('Contained Primary');
  expect(rendered).toBeTruthy();
});
