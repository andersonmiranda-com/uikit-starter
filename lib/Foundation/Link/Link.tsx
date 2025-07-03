import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import type { ColorKey } from '../../utils/types/Colors.type';
import { Text, type TextProps } from '../Text';

type LinkVariant = 'link1' | 'link2' | 'link3';

// Exclude standard HTML attributes from TextProps to avoid conflicts
// with AnchorHTMLAttributes, keeping only the specific styling props.
type BaseTextProps = Omit<TextProps, keyof HTMLAttributes<HTMLElement>>;

export interface ILinkProps extends BaseTextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The visual variant of the link.
   * @default 'link1'
   */
  variant?: LinkVariant;
  /**
   * The color of the text. Must be a valid color from the design system.
   * This overrides the default HTML 'color' attribute type.
   */
  color?: ColorKey;
}

export const Link = ({ variant = 'link1', color, ...props }: ILinkProps) => {
  // The `as="a"` prop ensures it renders an anchor tag, while `variant` applies the specific link styles.
  return <Text {...props} as="a" variant={variant} color={color} />;
};

Link.displayName = 'Link';
