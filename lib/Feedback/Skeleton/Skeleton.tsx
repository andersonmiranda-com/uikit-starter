import type { HTMLAttributes, Ref } from 'react';
import { skeleton, type SkeletonVariants } from './skeleton.styles';

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    SkeletonVariants {
  ref?: Ref<HTMLDivElement>;
  /**
   * Custom width in pixels or CSS units
   */
  customWidth?: string | number;
  /**
   * Custom height in pixels or CSS units
   */
  customHeight?: string | number;
  /**
   * Whether the skeleton should animate
   * @default true
   */
  animate?: boolean;
  /**
   * Number of skeleton lines to render (for text variant)
   * @default 1
   */
  lines?: number;
  /**
   * Spacing between lines when multiple lines are rendered
   * @default 'gap-2'
   */
  lineSpacing?: string;
}

/**
 * Skeleton component for showing loading placeholders
 *
 * @example
 * ```tsx
 * // Basic text skeleton
 * <Skeleton />
 *
 * // Circular avatar skeleton
 * <Skeleton variant="circular" size="lg" />
 *
 * // Custom dimensions
 * <Skeleton customWidth={200} customHeight={100} />
 *
 * // Multiple lines
 * <Skeleton lines={3} />
 * ```
 */
export function Skeleton({
  className,
  variant,
  size,
  width,
  height,
  customWidth,
  customHeight,
  animate = true,
  lines = 1,
  lineSpacing = 'gap-2',
  style,
  ref,
  ...props
}: SkeletonProps) {
  const customStyle = {
    ...style,
    ...(customWidth && {
      width: typeof customWidth === 'number' ? `${customWidth}px` : customWidth,
    }),
    ...(customHeight && {
      height:
        typeof customHeight === 'number' ? `${customHeight}px` : customHeight,
    }),
  };

  const skeletonClasses = skeleton({
    variant,
    size,
    width: customWidth ? undefined : width,
    height: customHeight ? undefined : height,
    className: animate ? className : `${className ?? ''} animate-none`,
  });

  if (lines > 1 && variant === 'text') {
    return (
      <div
        ref={ref}
        className={`flex flex-col ${lineSpacing}`}
        role="status"
        aria-label="Loading content"
        {...props}
      >
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={skeleton({
              variant,
              size,
              width: index === lines - 1 ? 'lg' : width,
              className: animate ? '' : 'animate-none',
            })}
            style={index === 0 ? customStyle : undefined}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={skeletonClasses}
      style={customStyle}
      role="status"
      aria-label="Loading content"
      {...props}
    />
  );
}

Skeleton.displayName = 'Skeleton';

export default Skeleton;