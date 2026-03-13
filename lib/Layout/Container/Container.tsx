import React, { forwardRef, type JSX } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { container } from './container.styles';

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as = 'div', children, className, size, ...props }, ref) => {
    const Component = as as any;
    const styles = container({ size, className });

    return (
      <Component ref={ref} className={styles} {...props}>
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
