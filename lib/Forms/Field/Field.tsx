import { type InputHTMLAttributes, type LabelHTMLAttributes, type HTMLAttributes } from 'react';
import {
  fieldGroupStyles,
  fieldLabelStyles,
  fieldDescriptionStyles,
  fieldErrorStyles,
  fieldInputStyles,
} from './field.tv';

export const Label = ({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} className={fieldLabelStyles({ className })} />;
};

Label.displayName = 'Label';

export const Description = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props} className={fieldDescriptionStyles({ className })} />;
};

Description.displayName = 'Description';

export const FieldError = ({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  if (!children) {
    return null;
  }
  return (
    <span {...props} className={fieldErrorStyles({ className })}>
      {children}
    </span>
  );
};

FieldError.displayName = 'FieldError';
export const FieldGroup = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={fieldGroupStyles({ className })} />;
};

FieldGroup.displayName = 'FieldGroup';
type InputStatus = 'default' | 'error' | 'warning' | 'valid';

export const Input = ({
  className,
  status,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { status?: InputStatus }) => {
  return <input {...props} className={fieldInputStyles({ className, status })} />;
};

Input.displayName = 'Input';
