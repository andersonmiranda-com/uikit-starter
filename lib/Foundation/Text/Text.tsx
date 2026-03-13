import { createElement, forwardRef, type HTMLAttributes } from 'react';
import { type ColorKey } from '../../utils/types/Colors.type';
import {
  textStyles,
  type TextElementType,
  type TextVariant,
  type TextWeight,
  variantToElementMap,
} from './text.styles';

export type TextProps = {
  as?: TextElementType;
  variant?: TextVariant;
  weight?: TextWeight;
  color?: ColorKey;
  /**
   * If true, the text will have a monospaced font.
   */
  monospaced?: boolean;
  /**
   *  If true, the the text will fixed at desktop font size, and it will not be responsive.
   */
  fixed?: boolean;
} & HTMLAttributes<HTMLElement>;

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as, variant = 'body1', weight = 400, color, monospaced, fixed, className, ...props }, ref) => {
    const Component = as ?? variantToElementMap[variant] ?? 'p';

    return createElement(Component, {
      ...props,
      ref,
      className: textStyles({
        variant,
        weight,
        fixed,
        monospaced,
        className: [className, color && `text-${color}`].filter(Boolean).join(' '),
      }),
    });
  }
);

Text.displayName = 'Text';
