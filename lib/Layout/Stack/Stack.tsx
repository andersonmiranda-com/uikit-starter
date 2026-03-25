import type { JSX, Ref } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { stack } from './stack.styles';

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stack> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  ref?: Ref<HTMLElement>;
}

export function Stack({
  as = 'div',
  children,
  className,
  direction,
  spacing,
  align,
  justify,
  ref,
  ...props
}: StackProps) {
  const Component = as as 'div';
  const styles = stack({ direction, spacing, align, justify, className });

  return (
    <Component ref={ref as Ref<HTMLDivElement>} className={styles} {...props}>
      {children}
    </Component>
  );
}

Stack.displayName = 'Stack';
