import { tv } from 'tailwind-variants';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
export type ButtonMode = 'filled' | 'outlined' | 'flat';

export const buttonStyles = tv({
  base: 'items-center justify-center rounded-md transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  variants: {
    variant: {
      primary: '',
      secondary: '',
      tertiary: '',
      info: '',
      success: '',
      warning: '',
      error: '',
    },
    mode: {
      filled: '',
      outlined: '',
      flat: '',
    },
    size: {
      small: 'h-[30px] px-3 text-sm font-medium',
      medium: 'text-md h-[40px] px-4 font-medium',
      large: 'h-[50px] px-5 text-lg font-medium',
    },
    block: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
    disabled: {
      true: 'disabled:cursor-not-allowed',
    },
  },
  compoundVariants: [
    // PRIMARY
    {
      variant: 'primary',
      mode: 'filled',
      class:
        'bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-700 disabled:bg-primary-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'primary',
      mode: 'outlined',
      class:
        'border-primary-500 text-primary-500 hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-700 disabled:border-primary-300 disabled:text-primary-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'primary',
      mode: 'flat',
      class:
        'text-primary-500 hover:bg-primary-600 focus:ring-primary-500 active:bg-primary-700 disabled:text-primary-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    // SECONDARY
    {
      variant: 'secondary',
      mode: 'filled',
      class:
        'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 active:bg-secondary-700 disabled:bg-secondary-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'secondary',
      mode: 'outlined',
      class:
        'border-secondary-500 text-secondary-500 hover:bg-secondary-100 focus:ring-secondary-500 active:bg-secondary-200 disabled:border-secondary-200 disabled:text-secondary-400 border disabled:cursor-not-allowed',
    },
    {
      variant: 'secondary',
      mode: 'flat',
      class:
        'text-secondary-500 hover:bg-secondary-100 focus:ring-secondary-500 active:bg-secondary-200 disabled:text-secondary-400 disabled:cursor-not-allowed',
    },
    // TERTIARY
    {
      variant: 'tertiary',
      mode: 'filled',
      class:
        'bg-tertiary-500 hover:bg-tertiary-600 focus:ring-tertiary-500 active:bg-tertiary-700 disabled:bg-tertiary-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'tertiary',
      mode: 'outlined',
      class:
        'border-tertiary-500 text-tertiary-500 hover:bg-tertiary-600 focus:ring-tertiary-500 active:bg-tertiary-700 disabled:border-tertiary-300 disabled:text-tertiary-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'tertiary',
      mode: 'flat',
      class:
        'text-tertiary-500 hover:bg-tertiary-600 focus:ring-tertiary-500 active:bg-tertiary-700 disabled:text-tertiary-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    // INFO
    {
      variant: 'info',
      mode: 'filled',
      class:
        'bg-info-500 hover:bg-info-600 focus:ring-info-500 active:bg-info-700 disabled:bg-info-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'info',
      mode: 'outlined',
      class:
        'border-info-500 text-info-500 hover:bg-info-600 focus:ring-info-500 active:bg-info-700 disabled:border-info-300 disabled:text-info-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'info',
      mode: 'flat',
      class:
        'text-info-500 hover:bg-info-600 focus:ring-info-500 active:bg-info-700 disabled:text-info-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    // SUCCESS
    {
      variant: 'success',
      mode: 'filled',
      class:
        'bg-success-500 hover:bg-success-600 focus:ring-success-500 active:bg-success-700 disabled:bg-success-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'success',
      mode: 'outlined',
      class:
        'border-success-500 text-success-500 hover:bg-success-600 focus:ring-success-500 active:bg-success-700 disabled:border-success-300 disabled:text-success-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'success',
      mode: 'flat',
      class:
        'text-success-500 hover:bg-success-600 focus:ring-success-500 active:bg-success-700 disabled:text-success-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    // WARNING
    {
      variant: 'warning',
      mode: 'filled',
      class:
        'bg-warning-500 hover:bg-warning-600 focus:ring-warning-500 active:bg-warning-700 disabled:bg-warning-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'warning',
      mode: 'outlined',
      class:
        'border-warning-500 text-warning-500 hover:bg-warning-600 focus:ring-warning-500 active:bg-warning-700 disabled:border-warning-300 disabled:text-warning-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'warning',
      mode: 'flat',
      class:
        'text-warning-500 hover:bg-warning-600 focus:ring-warning-500 active:bg-warning-700 disabled:text-warning-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    // ERROR
    {
      variant: 'error',
      mode: 'filled',
      class:
        'bg-error-500 hover:bg-error-600 focus:ring-error-500 active:bg-error-700 disabled:bg-error-300 text-white disabled:cursor-not-allowed disabled:text-white',
    },
    {
      variant: 'error',
      mode: 'outlined',
      class:
        'border-error-500 text-error-500 hover:bg-error-600 focus:ring-error-500 active:bg-error-700 disabled:border-error-300 disabled:text-error-300 border hover:text-white active:text-white disabled:cursor-not-allowed',
    },
    {
      variant: 'error',
      mode: 'flat',
      class:
        'text-error-500 hover:bg-error-600 focus:ring-error-500 active:bg-error-700 disabled:text-error-300 hover:text-white active:text-white disabled:cursor-not-allowed',
    },
  ],
  defaultVariants: {
    size: 'small',
    variant: 'primary',
    mode: 'filled',
  },
});
