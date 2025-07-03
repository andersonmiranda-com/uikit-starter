import { type ButtonHTMLAttributes } from 'react';
import { ButtonMode, ButtonSize, ButtonVariant, buttonStyles } from './button.tv';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  mode?: ButtonMode;
  block?: boolean;
}

export const Button = ({
  size,
  variant,
  mode,
  className,
  block,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={buttonStyles({
        size,
        variant,
        mode,
        block,
        disabled,
        className,
      })}
    />
  );
};

Button.displayName = 'Button';
