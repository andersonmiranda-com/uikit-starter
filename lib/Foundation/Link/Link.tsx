import type { AnchorHTMLAttributes, Ref } from 'react';
import type { ColorKey } from '../../utils/types/Colors.type';
import type { LinkVariants } from './link.styles';
import { Slot } from '../../utils/Slot';
import { linkStyles } from './link.styles';
import { Text } from '../Text';

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkVariants {
  asChild?: boolean;
  ref?: Ref<HTMLAnchorElement>;
  /**
   * The color of the text. Must be a valid color from the design system.
   */
  color?: ColorKey;
}

export function Link({
  asChild = false,
  className,
  variant,
  disabled,
  color,
  ref,
  ...props
}: LinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Text
      as={Component as 'a'}
      ref={ref as Ref<HTMLElement>}
      className={linkStyles({ variant, disabled, className })}
      aria-disabled={disabled || undefined}
      color={color}
      {...props}
    />
  );
}

Link.displayName = 'Link';
