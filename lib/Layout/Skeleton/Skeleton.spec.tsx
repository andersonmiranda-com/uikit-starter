import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renderiza correctamente con props por defecto', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('animate-pulse', 'bg-gray-200', 'rounded', 'h-4', 'w-32');
  });

  it('renderiza con variante personalizada', () => {
    render(<Skeleton variant="title" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-6');
  });

  it('renderiza con tamaño personalizado', () => {
    render(<Skeleton size="lg" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-48');
  });

  it('renderiza múltiples elementos cuando count > 1', () => {
    render(<Skeleton count={3} />);
    const skeletons = screen.getAllByRole('status');
    expect(skeletons).toHaveLength(3);
  });

  it('renderiza un solo elemento cuando count = 1', () => {
    render(<Skeleton count={1} />);
    const skeletons = screen.getAllByRole('status');
    expect(skeletons).toHaveLength(1);
  });

  it('aplica aria-label personalizado', () => {
    const customLabel = 'Cargando datos del usuario';
    render(<Skeleton aria-label={customLabel} />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveAttribute('aria-label', customLabel);
  });

  it('genera aria-label automático cuando no se proporciona', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveAttribute('aria-label', 'Cargando contenido 1');
  });

  it('genera aria-label automático para múltiples elementos', () => {
    render(<Skeleton count={3} />);
    const skeletons = screen.getAllByRole('status');
    expect(skeletons[0]).toHaveAttribute('aria-label', 'Cargando contenido 1');
    expect(skeletons[1]).toHaveAttribute('aria-label', 'Cargando contenido 2');
    expect(skeletons[2]).toHaveAttribute('aria-label', 'Cargando contenido 3');
  });

  it('aplica clases CSS personalizadas', () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('pasa props adicionales al elemento', () => {
    render(<Skeleton data-testid="custom-skeleton" />);
    const skeleton = screen.getByTestId('custom-skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('renderiza con variante avatar', () => {
    render(<Skeleton variant="avatar" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('rounded-full', 'h-12', 'w-12');
  });

  it('renderiza con variante button', () => {
    render(<Skeleton variant="button" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-10');
  });

  it('renderiza con variante image', () => {
    render(<Skeleton variant="image" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('aspect-video');
  });

  it('renderiza con variante card', () => {
    render(<Skeleton variant="card" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-32', 'w-full');
  });

  it('renderiza con variante list', () => {
    render(<Skeleton variant="list" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-12');
  });

  it('renderiza con variante circular', () => {
    render(<Skeleton variant="circular" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('rounded-full', 'aspect-square');
  });

  it('renderiza con tamaño full', () => {
    render(<Skeleton size="full" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-full');
  });

  it('mantiene accesibilidad con aria-live', () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveAttribute('aria-live', 'polite');
  });
}); 