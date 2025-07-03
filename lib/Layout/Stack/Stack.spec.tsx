import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Stack } from './Stack';

const Box = () => <div data-testid="box">Box</div>;

describe('Stack', () => {
  it('renders with default variants (column, md)', () => {
    const { getByTestId } = render(
      <Stack data-testid="stack-default">
        <Box />
        <Box />
      </Stack>
    );
    const stack = getByTestId('stack-default');
    expect(stack).toHaveClass('flex', 'flex-col', 'gap-4');
  });

  it('applies direction="row" and spacing="lg" correctly', () => {
    const { getByTestId } = render(
      <Stack direction="row" spacing="lg" data-testid="stack-row">
        <Box />
        <Box />
      </Stack>
    );
    const stack = getByTestId('stack-row');
    expect(stack).toHaveClass('flex', 'flex-row', 'gap-8');
  });

  it('allows align and justify props', () => {
    const { getByTestId } = render(
      <Stack direction="row" align="center" justify="between" data-testid="stack-align">
        <Box />
        <Box />
      </Stack>
    );
    const stack = getByTestId('stack-align');
    expect(stack).toHaveClass('items-center', 'justify-between');
  });
});
