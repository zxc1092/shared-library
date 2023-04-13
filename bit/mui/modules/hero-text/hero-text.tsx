import React, { ReactNode } from 'react';

export type HeroTextProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function HeroText({ children }: HeroTextProps) {
  return (
    <div>
      {children}
    </div>
  );
}
