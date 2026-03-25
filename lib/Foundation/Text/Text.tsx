import { createElement, type HTMLAttributes, type Ref } from 'react';
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
  ref?: Ref<HTMLElement>;
  /**
   * If true, the text will have a monospaced font.
   */
  monospaced?: boolean;
  /**
   * If true, the text will be fixed at desktop font size and will not be responsive.
   */
  fixed?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Text({
  as,
  variant = 'body1',
  weight = 400,
  color,
  monospaced,
  fixed,
  className,
  ref,
  ...props
}: TextProps) {
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

Text.displayName = 'Text';
