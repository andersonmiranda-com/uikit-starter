import { useId, type InputHTMLAttributes } from 'react';
import { Description, FieldError, Input, Label } from '../Field/Field';
import { textfieldStyles } from './textfield.tv';

type TextFieldStatus = 'default' | 'error' | 'warning' | 'valid';
type TextFieldType = 'text' | 'email' | 'password' | 'number';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  status?: TextFieldStatus;
  type?: TextFieldType;
}

export function TextField({
  label,
  description,
  errorMessage,
  className,
  status,
  ...props
}: TextFieldProps) {
  const id = useId();

  return (
    <div className={textfieldStyles({ className })}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...props} status={status} />
      {description && <Description>{description}</Description>}
      {status === 'error' && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
}
