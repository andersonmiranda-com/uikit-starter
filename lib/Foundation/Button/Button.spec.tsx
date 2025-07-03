import { render, fireEvent } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Button } from './Button';

test('renderiza el botón primario correctamente', () => {
  const { getByTestId } = render(<Button data-testid="primary-button">Button</Button>);
  const button = getByTestId('primary-button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-indigo-600');
});

test('renderiza el botón secundario correctamente', () => {
  const { getByTestId } = render(
    <Button variant="secondary" data-testid="secondary-button">
      Button
    </Button>
  );
  const button = getByTestId('secondary-button');
  expect(button).toHaveClass('bg-white');
  expect(button).toHaveClass('text-gray-700');
});

test('renderiza el botón info correctamente', () => {
  const { getByTestId } = render(
    <Button variant="info" data-testid="info-button">
      Button
    </Button>
  );
  const button = getByTestId('info-button');
  expect(button).toHaveClass('bg-cyan-700');
});

test('renderiza el botón success correctamente', () => {
  const { getByTestId } = render(
    <Button variant="success" data-testid="success-button">
      Button
    </Button>
  );
  const button = getByTestId('success-button');
  expect(button).toHaveClass('bg-green-700');
});

test('renderiza el botón warning correctamente', () => {
  const { getByTestId } = render(
    <Button variant="warning" data-testid="warning-button">
      Button
    </Button>
  );
  const button = getByTestId('warning-button');
  expect(button).toHaveClass('bg-orange-700');
});

test('renderiza el botón danger correctamente', () => {
  const { getByTestId } = render(
    <Button variant="error" data-testid="danger-button">
      Button
    </Button>
  );
  const button = getByTestId('danger-button');
  expect(button).toHaveClass('bg-error-500');
});

test('renderiza el botón outlined correctamente', () => {
  const { getByTestId } = render(
    <Button mode="outlined" data-testid="outlined-button">
      Button
    </Button>
  );
  const button = getByTestId('outlined-button');
  expect(button).toHaveClass('border');
  expect(button).toHaveClass('border-indigo-600');
});

test('renderiza el botón flat correctamente', () => {
  const { getByTestId } = render(
    <Button mode="flat" data-testid="flat-button">
      Button
    </Button>
  );
  const button = getByTestId('flat-button');
  expect(button).toHaveClass('text-indigo-600');
});

test('renderiza el botón deshabilitado correctamente', () => {
  const { getByTestId } = render(
    <Button disabled data-testid="disabled-button">
      Button
    </Button>
  );
  const button = getByTestId('disabled-button');
  expect(button).toBeDisabled();
  expect(button).toHaveClass('disabled:bg-indigo-300');
});

test('responde a eventos de click cuando está habilitado', () => {
  const onPressMock = vi.fn();
  const { getByTestId } = render(
    <Button onClick={onPressMock} data-testid="clickable-button">
      Click me
    </Button>
  );

  const button = getByTestId('clickable-button');
  fireEvent.click(button);
  expect(onPressMock).toHaveBeenCalled();
});

test('no responde a eventos de click cuando está deshabilitado', () => {
  const onPressMock = vi.fn();
  const { getByTestId } = render(
    <Button onClick={onPressMock} disabled data-testid="non-clickable-button">
      Click me
    </Button>
  );

  const button = getByTestId('non-clickable-button');
  fireEvent.click(button);
  expect(onPressMock).not.toHaveBeenCalled();
});

test('usa el data-testid por defecto cuando no se proporciona uno', () => {
  const { getByTestId } = render(<Button>Default Button</Button>);
  const button = getByTestId('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Default Button');
});

test('renderiza los tamaños correctamente', () => {
  const { getByTestId } = render(
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
  expect(getByTestId('button-small')).toHaveClass('h-[30px]', 'px-3', 'text-sm', 'font-medium');
  expect(getByTestId('button-medium')).toHaveClass('h-[40px]', 'px-4', 'text-md', 'font-medium');
  expect(getByTestId('button-large')).toHaveClass('h-[50px]', 'px-5', 'text-lg', 'font-medium');
});

test('renderiza el botón block correctamente', () => {
  const { getByTestId } = render(
    <Button block data-testid="block-button">
      Block Button
    </Button>
  );
  const button = getByTestId('block-button');
  expect(button).toHaveClass('w-full');
});
