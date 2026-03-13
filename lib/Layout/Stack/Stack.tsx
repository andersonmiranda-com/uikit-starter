import { forwardRef, type JSX } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { stack } from './stack.styles';

interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stack> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ as = 'div', children, className, direction, spacing, align, justify, ...props }, ref) => {
    const Component = as as any;
    const styles = stack({ direction, spacing, align, justify, className });

    return (
      <Component ref={ref} className={styles} {...props}>
        {children}
      </Component>
    );
  }
);

Stack.displayName = 'Stack';
