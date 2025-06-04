import React from 'react';
import { useButton } from 'react-aria';
import { AriaButtonProps } from '@react-types/button';
import { button, ButtonSize, ButtonVariant, ButtonMode } from './button.tv';

export interface ButtonProps extends Omit<AriaButtonProps, 'isDisabled'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  mode?: ButtonMode;
  className?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  'data-testid'?: string;
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'small',
      variant = 'primary',
      mode = 'filled',
      className,
      children,
      isDisabled,
      'data-testid': dataTestId = 'button',
      block,
      ...props
    },
    ref
  ) => {
    const { buttonProps } = useButton(
      { ...props, isDisabled },
      ref as React.RefObject<HTMLButtonElement>
    );

    const classes = button({
      size,
      variant,
      mode,
      disabled: !!isDisabled,
      className,
      block,
    });

    return (
      <button
        {...buttonProps}
        ref={ref}
        className={classes}
        disabled={isDisabled}
        data-testid={dataTestId}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
