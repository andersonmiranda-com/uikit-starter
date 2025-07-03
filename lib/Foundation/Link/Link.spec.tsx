import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('renders as an anchor element with the correct href', () => {
    render(<Link href="/test-path">Click me</Link>);
    const linkElement = screen.getByRole('link', { name: 'Click me' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test-path');
  });

  it('applies the correct variant class', () => {
    render(
      <Link href="#" variant="link2">
        Link 2
      </Link>
    );
    // The classes are complex and managed by tailwind-variants,
    // so we check for the presence of `underline` which is common to links.
    expect(screen.getByRole('link', { name: 'Link 2' })).toHaveClass(/underline/);
  });

  it('applies additional classNames', () => {
    render(
      <Link href="#" className="custom-link-class">
        Custom Link
      </Link>
    );
    expect(screen.getByRole('link', { name: 'Custom Link' })).toHaveClass('custom-link-class');
  });
});
