import React, { type JSX } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { container } from './container.tv';

interface IContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Container = ({ as = 'div', children, className, size, ...props }: IContainerProps) => {
  const Component = as as any;
  const styles = container({ size, className });

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

Container.displayName = 'Container';
