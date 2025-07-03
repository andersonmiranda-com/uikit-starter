import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Divider } from './Divider';

test('renders a horizontal divider by default', () => {
  render(<Divider data-testid="divider" />);
  const divider = screen.getByTestId('divider');
  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('role', 'separator');
  expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  expect(divider).toHaveClass('w-full h-px');
});

test('renders a horizontal divider explicitly', () => {
  render(<Divider orientation="horizontal" data-testid="divider-horizontal" />);
  const divider = screen.getByTestId('divider-horizontal');
  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  expect(divider).toHaveClass('w-full h-px');
});

test('renders a vertical divider', () => {
  render(<Divider orientation="vertical" data-testid="divider-vertical" />);
  const divider = screen.getByTestId('divider-vertical');
  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  expect(divider).toHaveClass('h-full w-px');
});

test('applies custom className', () => {
  render(<Divider className="my-custom-class" data-testid="divider-custom" />);
  const divider = screen.getByTestId('divider-custom');
  expect(divider).toHaveClass('my-custom-class');
});
