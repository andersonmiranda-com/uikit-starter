import { forwardRef, type FormHTMLAttributes } from 'react';
import { formStyles } from './form.styles';

export const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => {
    return <form {...props} ref={ref} className={formStyles({ className })} />;
  }
);

Form.displayName = 'Form';
