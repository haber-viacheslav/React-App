import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import { IFormikSelectProps } from '../../types/types';
export const Select: React.FC<IFormikSelectProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.listName}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg: string) => <TextError>{msg}</TextError>}
      />
    </div>
  );
};
