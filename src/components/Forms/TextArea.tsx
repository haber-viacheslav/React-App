import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import { ITextAreaProps } from '../../types/types';

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage
        name={name}
        render={(msg: string) => <TextError>{msg}</TextError>}
      />
    </div>
  );
};
