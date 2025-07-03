import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Slot = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => {
  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      style?: React.CSSProperties;
      className?: string;
    }>;
    return React.cloneElement(child, {
      ...props,
      style: { ...props.style, ...child.props.style },
      className: twMerge(props.className, child.props.className),
    });
  }
  return null;
};
