import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Grid } from '.';

describe('Grid', () => {
  it('should render children correctly', () => {
    render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('should apply default classes correctly', () => {
    const { container } = render(
      <Grid>
        <div />
      </Grid>
    );
    const gridElement = container.firstChild;
    expect(gridElement).toHaveClass('grid');
    expect(gridElement).toHaveClass('grid-cols-12');
    expect(gridElement).toHaveClass('gap-4');
    expect(gridElement).toHaveClass('items-stretch');
    expect(gridElement).toHaveClass('justify-items-start');
  });

  it('should apply classes for specified props', () => {
    const { container } = render(
      <Grid columns={4} gap="lg" align="center" justify="end">
        <div />
      </Grid>
    );
    const gridElement = container.firstChild;
    expect(gridElement).toHaveClass('grid-cols-4');
    expect(gridElement).toHaveClass('gap-6');
    expect(gridElement).toHaveClass('items-center');
    expect(gridElement).toHaveClass('justify-items-end');
  });

  it('should apply responsive column classes correctly', () => {
    const { container } = render(
      <Grid columns={{ initial: 2, sm: 4, md: 6, lg: 8, xl: 10 }}>
        <div />
      </Grid>
    );
    const gridElement = container.firstChild;
    expect(gridElement).toHaveClass('grid-cols-2');
    expect(gridElement).toHaveClass('sm:grid-cols-4');
    expect(gridElement).toHaveClass('md:grid-cols-6');
    expect(gridElement).toHaveClass('lg:grid-cols-8');
    expect(gridElement).toHaveClass('xl:grid-cols-10');
  });

  it('should merge custom className', () => {
    const { container } = render(
      <Grid className="custom-class bg-red-500">
        <div />
      </Grid>
    );
    const gridElement = container.firstChild;
    expect(gridElement).toHaveClass('grid');
    expect(gridElement).toHaveClass('custom-class');
    expect(gridElement).toHaveClass('bg-red-500');
  });

  it('should forward ref to the underlying div element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Grid ref={ref}>
        <div />
      </Grid>
    );
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('DIV');
  });
});
