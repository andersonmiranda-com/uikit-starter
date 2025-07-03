import { type HTMLAttributes } from 'react';
import { dividerStyles } from './divider.tv';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({ orientation = 'horizontal', className, ...props }: DividerProps) => {
  return (
    <div
      {...props}
      role="separator"
      aria-orientation={orientation}
      className={dividerStyles({ orientation, className })}
    />
  );
};

Divider.displayName = 'Divider';
