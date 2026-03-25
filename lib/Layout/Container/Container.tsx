import type { JSX, Ref } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { container } from './container.styles';

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  ref?: Ref<HTMLElement>;
}

export function Container({
  as = 'div',
  children,
  className,
  size,
  ref,
  ...props
}: ContainerProps) {
  const Component = as as 'div';
  const styles = container({ size, className });

  return (
    <Component ref={ref as Ref<HTMLDivElement>} className={styles} {...props}>
      {children}
    </Component>
  );
}

Container.displayName = 'Container';
