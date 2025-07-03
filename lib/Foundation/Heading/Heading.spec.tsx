import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders the correct heading element based on the level prop', () => {
    const { rerender } = render(<Heading level={1}>Level 1</Heading>);
    expect(screen.getByRole('heading', { level: 1, name: 'Level 1' })).toBeInTheDocument();

    rerender(<Heading level={2}>Level 2</Heading>);
    expect(screen.getByRole('heading', { level: 2, name: 'Level 2' })).toBeInTheDocument();

    rerender(<Heading level={6}>Level 6</Heading>);
    expect(screen.getByRole('heading', { level: 6, name: 'Level 6' })).toBeInTheDocument();
  });

  it('applies additional classNames', () => {
    render(
      <Heading level={1} className="custom-class">
        Custom Class
      </Heading>
    );
    const heading = screen.getByRole('heading', { name: 'Custom Class' });
    expect(heading).toHaveClass('custom-class');
  });

  it('applies the correct font weight class', () => {
    render(
      <Heading level={1} weight={700}>
        Bold Heading
      </Heading>
    );
    const heading = screen.getByRole('heading', { name: 'Bold Heading' });
    expect(heading).toHaveClass('font-bold');
  });
});
