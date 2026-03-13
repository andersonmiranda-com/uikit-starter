import { forwardRef, type HTMLAttributes } from 'react';
import {
  dividerStyles,
  type DividerOrientation,
  type DividerSpacing,
  type DividerThickness,
} from './divider.styles';
import type { ColorKey } from '../../utils/types/Colors.type';
import { twMerge } from 'tailwind-merge';

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /**
   * The orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;
  /**
   * Visual thickness of the divider.
   * @default 'thin'
   */
  thickness?: DividerThickness;
  /**
   * Spacing (margin) applied around the divider.
   * @default 'none'
   */
  spacing?: DividerSpacing;
  /**
   * Background color token. Must be a valid ColorKey.
   * @default 'neutral-200'
   */
  color?: ColorKey;
}

export const Divider = forwardRef<HTMLElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      thickness = 'thin',
      spacing = 'none',
      color = 'neutral-200',
      className,
      ...props
    },
    ref
  ) => {
    const colorClass = twMerge(className, color && `bg-${color}`);
    const combinedClassName = dividerStyles({
      orientation,
      thickness,
      spacing,
      className: colorClass,
    });

    const Element = orientation === 'horizontal' ? 'hr' : 'div';
    const ariaOrientation = orientation === 'vertical' ? 'vertical' : undefined;

    return (
      <Element
        {...props}
        ref={ref as any}
        role="separator"
        aria-orientation={ariaOrientation}
        className={combinedClassName}
      />
    );
  }
);

Divider.displayName = 'Divider';
