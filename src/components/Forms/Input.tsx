import React from 'react';
import { TextError } from './TextError';
import { IInputProps } from '../../types/types';
import {
  InputWrp,
  FormInput,
  FormInputLabel,
  FormErrorMessage,
} from './Forms.styled';
export const Input: React.FC<IInputProps> = ({
  label,
  name,

  ...rest
}) => {
  return (
    <InputWrp>
      <FormInputLabel htmlFor={name}>{label}</FormInputLabel>
      <FormInput id={name} name={name} {...rest} />
      <FormErrorMessage
        name={name}
        render={msg => <TextError>{msg}</TextError>}
      />
    </InputWrp>
  );
};
