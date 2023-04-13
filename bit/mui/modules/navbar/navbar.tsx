import React, { ReactNode } from 'react';

export type NavbarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Navbar({ children }: NavbarProps) {
  return (
    <div>
      {children}
    </div>
  );
}
