import React, { ReactNode } from 'react';

export type InfoCardsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function InfoCards({ children }: InfoCardsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
