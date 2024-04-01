import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextError } from './TextError';
import { ITextAreaProps } from '../../types/types';
import { InputWrp, FormInputLabel } from './Forms.styled';

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <InputWrp>
      <FormInputLabel htmlFor={name}>{label}</FormInputLabel>
      <Field
        className="form-text"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(msg: string) => <TextError>{msg}</TextError>}
      />
    </InputWrp>
  );
};
