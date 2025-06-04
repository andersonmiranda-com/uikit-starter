import { tv } from 'tailwind-variants';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonMode = 'filled' | 'outlined' | 'flat';

export const button = tv({
  base: 'items-center justify-center rounded-md transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  variants: {
    size: {
      small: 'h-[30px] px-3 text-sm font-medium',
      medium: 'text-md h-[40px] px-4 font-medium',
      large: 'h-[50px] px-5 text-lg font-medium',
    },
    variant: {
      primary: '',
      secondary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
    },
    mode: {
      filled: '',
      outlined: '',
      flat: '',
    },
    disabled: {
      true: '',
      false: '',
    },
    block: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
  },
  compoundVariants: [
    // PRIMARY
    {
      variant: 'primary',
      mode: 'filled',
      class:
        'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600 active:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:text-white',
    },
    {
      variant: 'primary',
      mode: 'outlined',
      class:
        'border border-indigo-600 text-indigo-600 hover:bg-indigo-700 hover:text-white focus:ring-indigo-600 active:bg-indigo-800 active:text-white disabled:cursor-not-allowed disabled:border-indigo-300 disabled:text-indigo-300',
    },
    {
      variant: 'primary',
      mode: 'flat',
      class:
        'text-indigo-600 hover:bg-indigo-700 hover:text-white focus:ring-indigo-600 active:bg-indigo-800 active:text-white disabled:cursor-not-allowed disabled:text-indigo-300',
    },
    // SECONDARY
    {
      variant: 'secondary',
      mode: 'filled',
      class:
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400',
    },
    {
      variant: 'secondary',
      mode: 'outlined',
      class:
        'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400',
    },
    {
      variant: 'secondary',
      mode: 'flat',
      class:
        'text-gray-700 hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400',
    },
    // INFO
    {
      variant: 'info',
      mode: 'filled',
      class:
        'bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-700 active:bg-cyan-900 disabled:cursor-not-allowed disabled:bg-cyan-300 disabled:text-white',
    },
    {
      variant: 'info',
      mode: 'outlined',
      class:
        'border border-cyan-700 text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-cyan-700 active:bg-cyan-900 active:text-white disabled:cursor-not-allowed disabled:border-cyan-300 disabled:text-cyan-300',
    },
    {
      variant: 'info',
      mode: 'flat',
      class:
        'text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-cyan-700 active:bg-cyan-900 active:text-white disabled:cursor-not-allowed disabled:text-cyan-300',
    },
    // SUCCESS
    {
      variant: 'success',
      mode: 'filled',
      class:
        'bg-green-700 text-white hover:bg-green-800 focus:ring-green-700 active:bg-green-900 disabled:cursor-not-allowed disabled:bg-green-300 disabled:text-white',
    },
    {
      variant: 'success',
      mode: 'outlined',
      class:
        'border border-green-700 text-green-700 hover:bg-green-800 hover:text-white focus:ring-green-700 active:bg-green-900 active:text-white disabled:cursor-not-allowed disabled:border-green-300 disabled:text-green-300',
    },
    {
      variant: 'success',
      mode: 'flat',
      class:
        'text-green-700 hover:bg-green-800 hover:text-white focus:ring-green-700 active:bg-green-900 active:text-white disabled:cursor-not-allowed disabled:text-green-300',
    },
    // WARNING
    {
      variant: 'warning',
      mode: 'filled',
      class:
        'bg-orange-700 text-white hover:bg-orange-800 focus:ring-orange-700 active:bg-orange-900 disabled:cursor-not-allowed disabled:bg-orange-300 disabled:text-white',
    },
    {
      variant: 'warning',
      mode: 'outlined',
      class:
        'border border-orange-700 text-orange-700 hover:bg-orange-800 hover:text-white focus:ring-orange-700 active:bg-orange-900 active:text-white disabled:cursor-not-allowed disabled:border-orange-300 disabled:text-orange-300',
    },
    {
      variant: 'warning',
      mode: 'flat',
      class:
        'text-orange-700 hover:bg-orange-800 hover:text-white focus:ring-orange-700 active:bg-orange-900 active:text-white disabled:cursor-not-allowed disabled:text-orange-300',
    },
    // DANGER
    {
      variant: 'danger',
      mode: 'filled',
      class:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 active:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white',
    },
    {
      variant: 'danger',
      mode: 'outlined',
      class:
        'border border-red-600 text-red-600 hover:bg-red-700 hover:text-white focus:ring-red-600 active:bg-red-800 active:text-white disabled:cursor-not-allowed disabled:border-red-300 disabled:text-red-300',
    },
    {
      variant: 'danger',
      mode: 'flat',
      class:
        'text-red-600 hover:bg-red-700 hover:text-white focus:ring-red-600 active:bg-red-800 active:text-white disabled:cursor-not-allowed disabled:text-red-300',
    },
  ],
  defaultVariants: {
    size: 'small',
    variant: 'primary',
    mode: 'filled',
    disabled: false,
  },
});
