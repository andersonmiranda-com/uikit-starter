import React from 'react';
import { twMerge } from 'tailwind-merge';

type ResponsiveProp<T> =
  | T
  | {
      initial?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };

type JustifyAlign = 'start' | 'center' | 'end' | 'stretch';
type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: ResponsiveProp<number>;
  gap?: Gap;
  align?: JustifyAlign;
  justify?: JustifyAlign;
  ref?: React.Ref<HTMLDivElement>;
}

const getResponsiveClasses = (prop: ResponsiveProp<number> | undefined) => {
  if (typeof prop === 'undefined') return '';
  if (typeof prop !== 'object') {
    return `grid-cols-${prop}`;
  }

  return Object.entries(prop)
    .map(([bp, val]) => (bp === 'initial' ? `grid-cols-${val}` : `${bp}:grid-cols-${val}`))
    .join(' ');
};

const gapClasses: Record<Gap, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

const alignClasses: Record<JustifyAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClasses: Record<JustifyAlign, string> = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
};

export const Grid = ({
  children,
  className,
  columns = 12,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  ref: gridRef,
  ...props
}: GridProps) => {
  const classes = twMerge(
    'grid',
    getResponsiveClasses(columns),
    gapClasses[gap],
    alignClasses[align],
    justifyClasses[justify],
    className
  );

  return (
    <div className={classes} ref={gridRef} {...props}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
