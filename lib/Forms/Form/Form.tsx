import { type FormHTMLAttributes } from 'react';
import { formStyles } from './form.tv';

export const Form = ({ className, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props} className={formStyles({ className })} />;
};

Form.displayName = 'Form';
