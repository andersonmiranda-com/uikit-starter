import { tv } from 'tailwind-variants';

/**
 * Sizes compatibles con el Button de shadcn:
 * - default
 * - sm
 * - lg
 * - icon
 */
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Variants compatibles con el Button de shadcn:
 * - default
 * - destructive
 * - outline
 * - secondary
 * - ghost
 * - link
 */
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

export const buttonStyles = tv({
  base:
    'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors ' +
    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none' +
    'ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-primary-500 hover:bg-primary-600 text-white',
      destructive: 'bg-error-500 hover:bg-error-600 text-white',
      outline: 'border border-neutral-300 bg-white hover:bg-neutral-100',
      secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
      ghost: 'text-neutral-900 hover:bg-neutral-200',
      link: 'text-primary-500 underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    block: false,
  },
});
