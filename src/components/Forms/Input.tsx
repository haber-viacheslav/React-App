import React from 'react';
import { TextError } from './TextError';
import { IInputProps } from '../../types/types';
import { FormInputWrp, FormInput, FormErrorMessage } from './Forms.styled';
export const Input: React.FC<IInputProps> = ({
  label,
  name,

  ...rest
}) => {
  return (
    <FormInputWrp>
      <FormInputWrp htmlFor={name}>{label}</FormInputWrp>
      <FormInput id={name} name={name} {...rest} />
      <FormErrorMessage
        name={name}
        render={msg => <TextError>{msg}</TextError>}
      />
    </FormInputWrp>
  );
};
