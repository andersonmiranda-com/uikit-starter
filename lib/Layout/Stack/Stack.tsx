import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { stack } from './stack.tv';

interface IStackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stack> {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Stack = ({
  tag = 'div',
  children,
  className,
  direction,
  spacing,
  align,
  justify,
  ...props
}: IStackProps) => {
  const Component = tag as any;
  const styles = stack({ direction, spacing, align, justify, className });

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};
Stack.displayName = 'Stack';

export { Stack };
export type { IStackProps };
