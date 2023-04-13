import React, { ReactNode } from 'react';

export type PromoCardsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function PromoCards({ children }: PromoCardsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
