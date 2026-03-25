import type {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
} from 'react';
import {
  fieldGroupStyles,
  fieldLabelStyles,
  fieldDescriptionStyles,
  fieldErrorStyles,
  fieldInputStyles,
  type FieldInputVariants,
} from './field.styles';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  ref?: Ref<HTMLLabelElement>;
}

export function Label({ className, ref, ...props }: LabelProps) {
  return <label {...props} ref={ref} className={fieldLabelStyles({ className })} />;
}

Label.displayName = 'Label';

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
}

export function Description({ className, ref, ...props }: DescriptionProps) {
  return <p {...props} ref={ref} className={fieldDescriptionStyles({ className })} />;
}

Description.displayName = 'Description';

export interface FieldErrorProps extends HTMLAttributes<HTMLSpanElement> {
  ref?: Ref<HTMLSpanElement>;
}

export function FieldError({ className, children, ref, ...props }: FieldErrorProps) {
  if (!children) {
    return null;
  }
  return (
    <span {...props} ref={ref} className={fieldErrorStyles({ className })}>
      {children}
    </span>
  );
}

FieldError.displayName = 'FieldError';

export interface FieldGroupProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export function FieldGroup({ className, ref, ...props }: FieldGroupProps) {
  return <div {...props} ref={ref} className={fieldGroupStyles({ className })} />;
}

FieldGroup.displayName = 'FieldGroup';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldInputVariants {
  ref?: Ref<HTMLInputElement>;
}

export function Input({ className, status, ref, ...props }: InputProps) {
  return (
    <input {...props} ref={ref} className={fieldInputStyles({ className, status })} />
  );
}

Input.displayName = 'Input';
