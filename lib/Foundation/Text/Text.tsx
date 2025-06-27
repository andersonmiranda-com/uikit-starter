import { createElement, type FC, type HTMLProps, type ReactNode } from 'react';
import { text, TextVariant, TextWeight, ElementType, variantToElementMap } from './text.tv';
import { ColorKey } from '../../utils/types/Colors.type';
import { twMerge } from 'tailwind-merge';

interface TextProps extends HTMLProps<HTMLElement> {
  variant?: TextVariant;
  weight?: TextWeight;
  element?: ElementType;
  color?: ColorKey;
  /**
   * If true, the text will have a monospaced font.
   */
  monospaced?: boolean;
  /**
   *  If true, the the text will fixed at desktop font size, and it will not be responsive.
   */
  fixed?: boolean;
  children: ReactNode;
  className?: string;
  dataTestId?: string;
}

export const Text: FC<TextProps> = ({
  variant = 'body1',
  weight = 400,
  element,
  color,
  monospaced = false,
  fixed = false,
  children,
  className,
  dataTestId = 'text-component',
  ...props
}) => {
  const Element = element ?? variantToElementMap[variant];

  const classes = text({
    variant,
    weight,
    fixed,
    monospaced,
    className,
  });

  return createElement(
    Element,
    {
      'data-testid': dataTestId,
      className: twMerge(classes, color ? `text-${color}` : ''),
      ...props,
    },
    children
  );
};

export type { TextProps, TextVariant, TextWeight, ElementType };
