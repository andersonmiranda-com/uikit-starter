import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-label', 'Loading content');
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<Skeleton variant="text" />);
    let skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-5', 'w-full'); // md size gives h-5

    rerender(<Skeleton variant="circular" size="md" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('rounded-full', 'w-5', 'h-5');

    rerender(<Skeleton variant="rectangular" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('rounded');

    rerender(<Skeleton variant="rounded" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('rounded-lg');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Skeleton size="xs" />);
    let skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-3');

    rerender(<Skeleton size="sm" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-4');

    rerender(<Skeleton size="md" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-5');

    rerender(<Skeleton size="lg" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-6');

    rerender(<Skeleton size="xl" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-8');
  });

  it('applies correct width classes', () => {
    const { rerender } = render(<Skeleton width="xs" />);
    let skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-16');

    rerender(<Skeleton width="sm" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-24');

    rerender(<Skeleton width="full" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-full');
  });

  it('applies custom width and height styles', () => {
    render(<Skeleton customWidth={200} customHeight={100} />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle({
      width: '200px',
      height: '100px',
    });
  });

  it('applies custom width and height with CSS units', () => {
    render(<Skeleton customWidth="50%" customHeight="2rem" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle({
      width: '50%',
      height: '2rem',
    });
  });

  it('renders multiple lines for text variant', () => {
    render(<Skeleton variant="text" lines={3} data-testid="skeleton-container" />);
    const container = screen.getByTestId('skeleton-container');
    expect(container).toBeInTheDocument();
    expect(container.children).toHaveLength(3);
  });

  it('applies custom line spacing for multiple lines', () => {
    render(<Skeleton variant="text" lines={2} lineSpacing="gap-4" data-testid="skeleton-container" />);
    const container = screen.getByTestId('skeleton-container');
    expect(container).toHaveClass('gap-4');
  });

  it('makes last line shorter in multiple lines', () => {
    render(<Skeleton variant="text" lines={3} width="full" data-testid="skeleton-container" />);
    const container = screen.getByTestId('skeleton-container');
    const lastLine = container.children[2];
    expect(lastLine).toHaveClass('w-48'); // 'lg' width class
  });

  it('disables animation when animate is false', () => {
    render(<Skeleton animate={false} />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('animate-none');
    expect(skeleton).not.toHaveClass('animate-pulse');
  });

  it('enables animation by default', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('animate-pulse');
    expect(skeleton).not.toHaveClass('animate-none');
  });

  it('applies additional className', () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('passes through additional props', () => {
    render(<Skeleton data-testid="custom-skeleton" id="skeleton-id" />);
    const skeleton = screen.getByTestId('custom-skeleton');
    expect(skeleton).toHaveAttribute('id', 'skeleton-id');
  });

  it('applies compound variants for circular skeleton', () => {
    const { rerender } = render(<Skeleton variant="circular" size="xs" />);
    let skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-3', 'h-3');

    rerender(<Skeleton variant="circular" size="lg" />);
    skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-6', 'h-6');
  });

  it('has correct accessibility attributes', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveAttribute('role', 'status');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading content');
  });

  it('renders single skeleton when lines is 1', () => {
    render(<Skeleton variant="text" lines={1} data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('role', 'status');
    expect(skeleton).not.toHaveClass('flex', 'flex-col');
  });

  it('only renders multiple lines for text variant', () => {
    render(<Skeleton variant="circular" lines={3} />);
    const skeleton = screen.getByRole('status');
    // Should render single circular skeleton, not multiple lines
    expect(skeleton).toHaveClass('rounded-full');
    expect(skeleton).not.toHaveClass('flex', 'flex-col');
  });
});