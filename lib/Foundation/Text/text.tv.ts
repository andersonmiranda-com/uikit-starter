import { tv } from 'tailwind-variants';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'body1'
  | 'body2'
  | 'link1'
  | 'link2'
  | 'link3'
  | 'caption'
  | 'caption2';

export type TextWeight = 400 | 500 | 600 | 700;

export type TextElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'a'
  | 'span'
  | 'div'
  | 'button'
  | 'label';

export const variantToElementMap: Record<TextVariant, TextElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'h2',
  subtitle2: 'h3',
  subtitle3: 'h4',
  body1: 'span',
  body2: 'span',
  link1: 'a',
  link2: 'a',
  link3: 'a',
  caption: 'span',
  caption2: 'span',
};

export const textStyles = tv({
  base: 'focus',
  variants: {
    variant: {
      h1: 'text-h1-mobile tablet:text-h1',
      h2: 'text-h2-mobile tablet:text-h2',
      h3: 'text-h3-mobile tablet:text-h3',
      h4: 'text-h4-mobile tablet:text-h4',
      subtitle1: 'text-subtitle1-mobile tablet:text-subtitle1',
      subtitle2: 'text-subtitle2-mobile tablet:text-subtitle2',
      subtitle3: 'text-subtitle3-mobile tablet:text-subtitle3',
      body1: 'text-body1-mobile tablet:text-body1',
      body2: 'text-body2-mobile tablet:text-body2',
      link1: 'text-link1-mobile tablet:text-link1 cursor-pointer underline',
      link2: 'text-link2-mobile tablet:text-link2 cursor-pointer underline',
      link3: 'text-link3-mobile tablet:text-link3 cursor-pointer underline',
      caption: 'text-caption-mobile tablet:text-caption',
      caption2: 'text-caption2-mobile tablet:text-caption2',
    },
    weight: {
      400: 'font-regular',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
    fixed: {
      true: '',
      false: '',
    },
    monospaced: {
      true: 'font-mono',
      false: 'font-sans',
    },
  },
  compoundVariants: [
    {
      fixed: true,
      variant: 'h1',
      class: 'text-h1',
    },
    {
      fixed: true,
      variant: 'h2',
      class: 'text-h2',
    },
    {
      fixed: true,
      variant: 'h3',
      class: 'text-h3',
    },
    {
      fixed: true,
      variant: 'h4',
      class: 'text-h4',
    },
    {
      fixed: true,
      variant: 'subtitle1',
      class: 'text-subtitle1',
    },
    {
      fixed: true,
      variant: 'subtitle2',
      class: 'text-subtitle2',
    },
    {
      fixed: true,
      variant: 'subtitle3',
      class: 'text-subtitle3',
    },
    {
      fixed: true,
      variant: 'body1',
      class: 'text-body1',
    },
    {
      fixed: true,
      variant: 'body2',
      class: 'text-body2',
    },
    {
      fixed: true,
      variant: 'link1',
      class: 'text-link1 cursor-pointer underline',
    },
    {
      fixed: true,
      variant: 'link2',
      class: 'text-link2 cursor-pointer underline',
    },
    {
      fixed: true,
      variant: 'link3',
      class: 'text-link3 cursor-pointer underline',
    },
    {
      fixed: true,
      variant: 'caption',
      class: 'text-caption',
    },
    {
      fixed: true,
      variant: 'caption2',
      class: 'text-caption',
    },
  ],
  defaultVariants: {
    variant: 'body1',
    weight: 400,
    fixed: false,
    monospaced: false,
  },
});
