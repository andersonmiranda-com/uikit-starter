import type { FormHTMLAttributes, Ref } from 'react';
import { formStyles } from './form.styles';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  ref?: Ref<HTMLFormElement>;
}

export function Form({ className, ref, ...props }: FormProps) {
  return <form {...props} ref={ref} className={formStyles({ className })} />;
}

Form.displayName = 'Form';
