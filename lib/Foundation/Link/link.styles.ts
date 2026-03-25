import { tv, type VariantProps } from 'tailwind-variants';

export const linkStyles = tv({
  base:
    'inline-flex items-center text-sm font-medium underline-offset-4 transition-colors focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  variants: {
    variant: {
      default: 'text-primary-500 hover:text-primary-600 hover:underline',
      subtle: 'text-neutral-700 hover:text-neutral-900',
      underline: 'text-primary-500 underline hover:text-primary-600',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
});

export type LinkVariants = VariantProps<typeof linkStyles>;

