import { render, fireEvent, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

test('renders the primary button correctly', () => {
  render(<Button data-testid="primary-button">Button</Button>);
  const button = screen.getByTestId('primary-button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-primary-500');
});

test('renders the secondary button correctly', () => {
  render(
    <Button variant="secondary" data-testid="secondary-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('secondary-button');
  expect(button).toHaveClass('bg-secondary-500');
});

test('renders the info button correctly', () => {
  render(
    <Button variant="info" data-testid="info-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('info-button');
  expect(button).toHaveClass('bg-info-500');
});

test('renders the success button correctly', () => {
  render(
    <Button variant="success" data-testid="success-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('success-button');
  expect(button).toHaveClass('bg-success-500');
});

test('renders the warning button correctly', () => {
  render(
    <Button variant="warning" data-testid="warning-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('warning-button');
  expect(button).toHaveClass('bg-warning-500');
});

test('renders the error button correctly', () => {
  render(
    <Button variant="error" data-testid="danger-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('danger-button');
  expect(button).toHaveClass('bg-error-500');
});

test('renders the outlined button correctly', () => {
  render(
    <Button mode="outlined" data-testid="outlined-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('outlined-button');
  expect(button).toHaveClass('border', 'border-primary-500');
});

test('renders the flat button correctly', () => {
  render(
    <Button mode="flat" data-testid="flat-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('flat-button');
  expect(button).toHaveClass('text-primary-500');
});

test('renders the disabled button correctly', () => {
  render(
    <Button disabled data-testid="disabled-button">
      Button
    </Button>
  );
  const button = screen.getByTestId('disabled-button');
  expect(button).toBeDisabled();
  expect(button).toHaveClass('disabled:bg-primary-300');
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
      <Button size="small" data-testid="button-small">
        Small
      </Button>
      <Button size="medium" data-testid="button-medium">
        Medium
      </Button>
      <Button size="large" data-testid="button-large">
        Large
      </Button>
    </>
  );
  expect(screen.getByTestId('button-small')).toHaveClass('h-[30px]', 'px-3', 'text-sm');
  expect(screen.getByTestId('button-medium')).toHaveClass('h-[40px]', 'px-4', 'text-md');
  expect(screen.getByTestId('button-large')).toHaveClass('h-[50px]', 'px-5', 'text-lg');
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
