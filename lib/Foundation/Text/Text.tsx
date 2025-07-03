import { forwardRef, createElement, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { type ColorKey } from '../../utils/types/Colors.type';
import {
  textStyles,
  type TextElementType,
  type TextVariant,
  type TextWeight,
  variantToElementMap,
} from './text.tv';

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

export const Text = ({
  as,
  variant = 'body1',
  weight = 400,
  color,
  monospaced,
  fixed,
  className,
  ...props
}: TextProps) => {
  const Component = as ?? variantToElementMap[variant] ?? 'p';

  return createElement(Component, {
    ...props,
    className: textStyles({
      variant,
      weight,
      fixed,
      monospaced,
      className: twMerge(className, color && `text-${color}`),
    }),
  });
};

Text.displayName = 'Text';
