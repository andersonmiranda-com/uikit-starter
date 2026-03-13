import { forwardRef, type ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { Slot } from '../../utils/Slot';
import { buttonStyles } from './button.styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, block, asChild = false, type, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        {...props}
        type={type ?? 'button'}
        ref={ref}
        className={buttonStyles({
          size,
          variant,
          block,
          className,
        })}
      />
    );
  }
);

Button.displayName = 'Button';
