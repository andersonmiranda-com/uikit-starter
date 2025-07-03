import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Container } from './Container';

describe('Container', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Container data-testid="container">Content</Container>);
    const containerEl = getByTestId('container');
    expect(containerEl).toBeInTheDocument();
    expect(containerEl).toHaveClass('mx-auto', 'max-w-screen-xl');
  });

  it('applies the correct size class', () => {
    const { getByTestId } = render(
      <Container size="sm" data-testid="container-sm">
        Content
      </Container>
    );
    const containerEl = getByTestId('container-sm');
    expect(containerEl).toHaveClass('max-w-screen-sm');
  });

  it('renders as a different HTML tag', () => {
    const { getByTestId } = render(
      <Container as="section" data-testid="container-section">
        Content
      </Container>
    );
    const containerEl = getByTestId('container-section');
    expect(containerEl.tagName).toBe('SECTION');
  });

  it('applies additional classNames', () => {
    const { getByTestId } = render(
      <Container className="my-custom-class" data-testid="container-custom">
        Content
      </Container>
    );
    const containerEl = getByTestId('container-custom');
    expect(containerEl).toHaveClass('my-custom-class');
  });
});
