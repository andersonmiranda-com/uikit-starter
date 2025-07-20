import { tv } from 'tailwind-variants';

export const skeleton = tv({
  base: 'animate-pulse rounded bg-gray-200',
  variants: {
    variant: {
      text: 'h-4',
      title: 'h-6',
      avatar: 'h-12 w-12 rounded-full',
      circular: 'aspect-square rounded-full',
      button: 'h-10',
      image: 'aspect-video',
      card: 'h-32 w-full',
      list: 'h-12',
    },
    size: {
      sm: 'w-16',
      md: 'w-32',
      lg: 'w-48',
      xl: 'w-64',
      full: 'w-full',
    },
  },
  compoundVariants: [
    {
      variant: 'avatar',
      class: 'w-12',
    },
    {
      variant: 'card',
      class: 'w-full',
    },
  ],
  defaultVariants: {
    variant: 'text',
    size: 'md',
  },
});
