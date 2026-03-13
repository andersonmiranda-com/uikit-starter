import { forwardRef, type HTMLAttributes, type InputHTMLAttributes, type LabelHTMLAttributes } from 'react';
import {
  fieldGroupStyles,
  fieldLabelStyles,
  fieldDescriptionStyles,
  fieldErrorStyles,
  fieldInputStyles,
} from './field.styles';

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return <label {...props} ref={ref} className={fieldLabelStyles({ className })} />;
  }
);

Label.displayName = 'Label';

export const Description = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return <p {...props} ref={ref} className={fieldDescriptionStyles({ className })} />;
});

Description.displayName = 'Description';

export const FieldError = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => {
    if (!children) {
      return null;
    }
    return (
      <span {...props} ref={ref} className={fieldErrorStyles({ className })}>
        {children}
      </span>
    );
  }
);

FieldError.displayName = 'FieldError';

export const FieldGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} ref={ref} className={fieldGroupStyles({ className })} />;
  }
);

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
