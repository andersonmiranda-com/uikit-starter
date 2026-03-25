import { tv, type VariantProps } from 'tailwind-variants';

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
  base: 'block text-sm font-medium text-neutral-700',
});

export const fieldDescriptionStyles = tv({
  base: 'text-sm text-neutral-500',
});

export const fieldErrorStyles = tv({
  base: 'text-error-600 text-sm',
});

export const fieldInputStyles = tv({
  base: [
    'flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-100',
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

export type FieldInputVariants = VariantProps<typeof fieldInputStyles>;
