import React from 'react';
import { type VariantProps } from 'tailwind-variants';
import { skeleton } from './skeleton.tv';

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeleton> {
  /**
   * Número de elementos skeleton a renderizar
   */
  count?: number;
  /**
   * Si el skeleton debe mostrar un texto alternativo para lectores de pantalla
   */
  'aria-label'?: string;
}

/**
 * Componente Skeleton para mostrar estados de carga
 * 
 * @example
 * ```tsx
 * <Skeleton variant="text" size="md" />
 * <Skeleton variant="avatar" size="sm" />
 * <Skeleton variant="circular" size="lg" />
 * <Skeleton variant="card" count={3} />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, count = 1, 'aria-label': ariaLabel, ...props }, ref) => {
    const elements = Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        ref={index === 0 ? ref : undefined}
        className={skeleton({ variant, size, className })}
        role="status"
        aria-label={ariaLabel || `Cargando contenido ${index + 1}`}
        aria-live="polite"
        {...props}
      />
    ));

    if (count === 1) {
      return elements[0];
    }

    return (
      <div className="space-y-2">
        {elements}
      </div>
    );
  }
);

Skeleton.displayName = 'Skeleton'; 