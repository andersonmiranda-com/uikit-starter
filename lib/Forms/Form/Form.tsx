import { type FormHTMLAttributes } from 'react';
import { formStyles } from './form.tv';

export function Form({ className, ...props }: FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props} className={formStyles({ className })} />;
}
