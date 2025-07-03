import { type HTMLAttributes } from 'react';
import { dividerStyles } from './divider.tv';

export interface IDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({ orientation = 'horizontal', className, ...props }: IDividerProps) => {
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
