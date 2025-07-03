import { tv } from 'tailwind-variants';

export const dividerStyles = tv({
  base: 'bg-neutral-200',
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
}); 