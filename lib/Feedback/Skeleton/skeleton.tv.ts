import { tv, type VariantProps } from 'tailwind-variants';

const skeleton = tv({
  base: 'animate-pulse rounded bg-gray-200 dark:bg-gray-700',
  variants: {
    variant: {
      text: 'h-4 w-full',
      circular: 'rounded-full',
      rectangular: 'rounded',
      rounded: 'rounded-lg',
    },
    size: {
      xs: 'h-3',
      sm: 'h-4',
      md: 'h-5',
      lg: 'h-6',
      xl: 'h-8',
    },
    width: {
      xs: 'w-16',
      sm: 'w-24',
      md: 'w-32',
      lg: 'w-48',
      xl: 'w-64',
      full: 'w-full',
    },
    height: {
      xs: 'h-3',
      sm: 'h-4',
      md: 'h-5',
      lg: 'h-6',
      xl: 'h-8',
      '2xl': 'h-12',
      '3xl': 'h-16',
      '4xl': 'h-20',
      '5xl': 'h-24',
    },
  },
  defaultVariants: {
    variant: 'text',
    size: 'md',
    width: 'full',
  },
  compoundVariants: [
    {
      variant: 'circular',
      size: 'xs',
      class: 'h-3 w-3',
    },
    {
      variant: 'circular',
      size: 'sm',
      class: 'h-4 w-4',
    },
    {
      variant: 'circular',
      size: 'md',
      class: 'h-5 w-5',
    },
    {
      variant: 'circular',
      size: 'lg',
      class: 'h-6 w-6',
    },
    {
      variant: 'circular',
      size: 'xl',
      class: 'h-8 w-8',
    },
  ],
});

export type SkeletonVariants = VariantProps<typeof skeleton>;
export { skeleton };
