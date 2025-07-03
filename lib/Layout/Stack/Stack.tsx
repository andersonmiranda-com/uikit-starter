import type { JSX } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { stack } from './stack.tv';

interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stack> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Stack = ({
  as = 'div',
  children,
  className,
  direction,
  spacing,
  align,
  justify,
  ...props
}: StackProps) => {
  const Component = as as any;
  const styles = stack({ direction, spacing, align, justify, className });

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

Stack.displayName = 'Stack';
