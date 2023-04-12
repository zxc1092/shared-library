import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryOutlinedButton } from './button.composition';

test('should render with the correct text', async () => {
  const { getByText } = render(
    <>
      <PrimaryOutlinedButton />
    </>
  );
  const rendered = await getByText('hello world!');
  expect(rendered).toBeTruthy();
});
