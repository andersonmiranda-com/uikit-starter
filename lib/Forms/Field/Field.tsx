import { type InputHTMLAttributes, type LabelHTMLAttributes, type HTMLAttributes } from 'react';
import {
  fieldGroupStyles,
  fieldLabelStyles,
  fieldDescriptionStyles,
  fieldErrorStyles,
  fieldInputStyles,
} from './field.tv';

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={fieldLabelStyles({ className })} />;
}

export function Description({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={fieldDescriptionStyles({ className })} />;
}

export function FieldError({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  if (!children) {
    return null;
  }
  return (
    <span {...props} className={fieldErrorStyles({ className })}>
      {children}
    </span>
  );
}

export function FieldGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={fieldGroupStyles({ className })} />;
}

type InputStatus = 'default' | 'error' | 'warning' | 'valid';

export function Input({
  className,
  status,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { status?: InputStatus }) {
  return <input {...props} className={fieldInputStyles({ className, status })} />;
}
