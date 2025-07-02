import { tv } from 'tailwind-variants';

export const fieldGroupStyles = tv({
  base: [
    'group flex h-9 items-center overflow-hidden rounded-lg border-2 bg-white forced-colors:bg-[Field]',
    'border-neutral-200', // Default
    'focus-within:border-primary-500',
  ],
  variants: {
    status: {
      default: '',
      error: 'border-error-500',
      warning: 'border-warning-500',
      valid: 'border-success-500',
    },
  },
});

export const fieldLabelStyles = tv({
  base: 'block text-sm font-medium text-gray-700',
});

export const fieldDescriptionStyles = tv({
  base: 'text-sm text-gray-500',
});

export const fieldErrorStyles = tv({
  base: 'text-error-600 text-sm',
});

export const fieldInputStyles = tv({
  base: [
    'w-full rounded-md border-2 bg-transparent p-2',
    'border-neutral-200',
    'focus:border-primary-500 focus:ring-primary-500',
    'disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-100',
  ],
  variants: {
    status: {
      default: '',
      error: 'border-error-500',
      warning: 'border-warning-500',
      valid: 'border-success-500',
    },
  },
});
