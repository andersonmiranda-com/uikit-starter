import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

test('renders the default button correctly', () => {
  render(<Button data-testid="default-button">Button</Button>);
  const button = screen.getByTestId('default-button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-primary-500', 'text-white');
});

test('renders the destructive button correctly', () => {
  render(
    <Button variant="destructive" data-testid="destructive-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('destructive-button');
  expect(button).toHaveClass('bg-error-500', 'text-white');
});

test('renders the outline button correctly', () => {
  render(
    <Button variant="outline" data-testid="outline-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('outline-button');
  expect(button).toHaveClass('border', 'border-neutral-300', 'bg-white');
});

test('renders the secondary button correctly', () => {
  render(
    <Button variant="secondary" data-testid="secondary-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('secondary-button');
  expect(button).toHaveClass('bg-secondary-500', 'text-white');
});

test('renders the ghost button correctly', () => {
  render(
    <Button variant="ghost" data-testid="ghost-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('ghost-button');
  expect(button).toHaveClass('hover:bg-neutral-200', 'text-neutral-900');
});

test('renders the link button correctly', () => {
  render(
    <Button variant="link" data-testid="link-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('link-button');
  expect(button).toHaveClass('text-primary-500', 'underline-offset-4');
});

test('renders the disabled button correctly', () => {
  render(
    <Button disabled data-testid="disabled-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('disabled-button');
  expect(button).toBeDisabled();
  expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50');
});

test('responds to click events when enabled', () => {
  const onPressMock = vi.fn();
  render(
    <Button onClick={onPressMock} data-testid="clickable-button">
      Click me
    </Button>
  );

  const button = screen.getByTestId('clickable-button');
  fireEvent.click(button);
  expect(onPressMock).toHaveBeenCalled();
});

test('does not respond to click events when disabled', () => {
  const onPressMock = vi.fn();
  render(
    <Button onClick={onPressMock} disabled data-testid="non-clickable-button">
      Click me
    </Button>
  );

  const button = screen.getByTestId('non-clickable-button');
  fireEvent.click(button);
  expect(onPressMock).not.toHaveBeenCalled();
});

test('renders without a default data-testid', () => {
  render(<Button>Default Button</Button>);
  const button = screen.getByRole('button', { name: 'Default Button' });
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Default Button');
});

test('renders sizes correctly', () => {
  render(
    <>
      <Button size="sm" data-testid="button-sm">
        Small
      </Button>
      <Button size="default" data-testid="button-default">
        Default
      </Button>
      <Button size="lg" data-testid="button-lg">
        Large
      </Button>
      <Button size="icon" data-testid="button-icon" aria-label="icon-only" />
    </>
  );
  expect(screen.getByTestId('button-sm')).toHaveClass('h-8', 'rounded-md', 'px-3', 'text-xs');
  expect(screen.getByTestId('button-default')).toHaveClass('h-9', 'px-4', 'py-2');
  expect(screen.getByTestId('button-lg')).toHaveClass('h-10', 'rounded-md', 'px-8');
  expect(screen.getByTestId('button-icon')).toHaveClass('h-9', 'w-9');
});

test('renders block button correctly', () => {
  render(
    <Button block data-testid="block-button">
      Block Button
    </Button>
  );
  const button = screen.getByTestId('block-button');
  expect(button).toHaveClass('w-full');
});

test('uses type=\"button\" by default', () => {
  render(<Button data-testid="type-button">Button</Button>);
  const button = screen.getByTestId('type-button');
  expect(button).toHaveAttribute('type', 'button');
});

test('respects custom type when provided', () => {
  render(
    <Button type="submit" data-testid="type-submit">
      Submit
    </Button>
  );
  const button = screen.getByTestId('type-submit');
  expect(button).toHaveAttribute('type', 'submit');
});

test('supports asChild rendering', () => {
  render(
    <Button asChild data-testid="aschild-button">
      <a href="https://example.com">Link</a>
    </Button>
  );
  const link = screen.getByTestId('aschild-button');
  expect(link.tagName.toLowerCase()).toBe('a');
  expect(link).toHaveAttribute('href', 'https://example.com');
});
