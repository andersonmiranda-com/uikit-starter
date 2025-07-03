import { tv } from 'tailwind-variants';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerThickness = 'hairline' | 'thin' | 'regular' | 'thick';
export type DividerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export const dividerStyles = tv({
  base: 'flex-shrink-0 border-0 bg-neutral-200',
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
  },
  compoundVariants: [
    // Thickness mapping
    { orientation: 'horizontal', thickness: 'hairline', class: 'h-px' },
    { orientation: 'horizontal', thickness: 'thin', class: 'h-0.5' },
    { orientation: 'horizontal', thickness: 'regular', class: 'h-1' },
    { orientation: 'horizontal', thickness: 'thick', class: 'h-2' },

    { orientation: 'vertical', thickness: 'hairline', class: 'w-px' },
    { orientation: 'vertical', thickness: 'thin', class: 'w-0.5' },
    { orientation: 'vertical', thickness: 'regular', class: 'w-1' },
    { orientation: 'vertical', thickness: 'thick', class: 'w-2' },

    // Spacing mapping (margin)
    { orientation: 'horizontal', spacing: 'none', class: 'my-0' },
    { orientation: 'horizontal', spacing: 'xs', class: 'my-1' },
    { orientation: 'horizontal', spacing: 'sm', class: 'my-2' },
    { orientation: 'horizontal', spacing: 'md', class: 'my-4' },
    { orientation: 'horizontal', spacing: 'lg', class: 'my-6' },

    { orientation: 'vertical', spacing: 'none', class: 'mx-0' },
    { orientation: 'vertical', spacing: 'xs', class: 'mx-1' },
    { orientation: 'vertical', spacing: 'sm', class: 'mx-2' },
    { orientation: 'vertical', spacing: 'md', class: 'mx-4' },
    { orientation: 'vertical', spacing: 'lg', class: 'mx-6' },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    thickness: 'thin',
    spacing: 'none',
  },
});
