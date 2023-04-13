import React, { ReactNode } from 'react';

export type HomeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Home({ children }: HomeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
