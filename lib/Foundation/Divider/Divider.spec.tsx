import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Divider } from './Divider';

// Helper to get separator by test id
const getDivider = (id: string) => screen.getByTestId(id);

test('renders a horizontal <hr> by default', () => {
  render(<Divider data-testid="divider" />);
  const divider = getDivider('divider');
  expect(divider.tagName.toLowerCase()).toBe('hr');
  expect(divider).toHaveAttribute('role', 'separator');
  expect(divider).not.toHaveAttribute('aria-orientation');
  expect(divider).toHaveClass('w-full');
  expect(divider).toHaveClass('h-0.5');
  expect(divider).toHaveClass('bg-neutral-200');
});

test('renders a horizontal divider explicitly', () => {
  render(<Divider orientation="horizontal" data-testid="divider-horizontal" />);
  const divider = screen.getByTestId('divider-horizontal');
  expect(divider.tagName.toLowerCase()).toBe('hr');
  expect(divider).not.toHaveAttribute('aria-orientation');
  expect(divider).toHaveClass('w-full');
  // Thickness default is 'thin' => h-0.5
  expect(divider).toHaveClass('h-0.5');
});

test('renders a vertical <div> with aria-orientation', () => {
  render(<Divider orientation="vertical" data-testid="divider-vertical" />);
  const divider = getDivider('divider-vertical');
  expect(divider.tagName.toLowerCase()).toBe('div');
  expect(divider).toHaveAttribute('role', 'separator');
  expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  expect(divider).toHaveClass('h-full');
  expect(divider).toHaveClass('w-0.5');
});

test('applies custom className', () => {
  render(<Divider className="my-custom-class" data-testid="divider-custom" />);
  const divider = screen.getByTestId('divider-custom');
  expect(divider).toHaveClass('my-custom-class');
});

test('applies provided color class', () => {
  render(<Divider color="primary-500" data-testid="divider-color" />);
  const divider = getDivider('divider-color');
  expect(divider).toHaveClass('bg-primary-500');
});

test('renders hairline thickness', () => {
  render(<Divider thickness="hairline" data-testid="divider-hairline" />);
  const divider = getDivider('divider-hairline');
  expect(divider).toHaveClass('h-px');
});

test('renders regular thickness', () => {
  render(<Divider thickness="regular" data-testid="divider-regular" />);
  const divider = getDivider('divider-regular');
  expect(divider).toHaveClass('h-1');
});

test('renders thick thickness', () => {
  render(<Divider thickness="thick" data-testid="divider-thick" />);
  const divider = getDivider('divider-thick');
  expect(divider).toHaveClass('h-2');
});

test('renders vertical hairline thickness', () => {
  render(<Divider orientation="vertical" thickness="hairline" data-testid="divider-v-hairline" />);
  const divider = getDivider('divider-v-hairline');
  expect(divider).toHaveClass('w-px');
});

test('renders vertical thick thickness', () => {
  render(<Divider orientation="vertical" thickness="thick" data-testid="divider-v-thick" />);
  const divider = getDivider('divider-v-thick');
  expect(divider).toHaveClass('w-2');
});
