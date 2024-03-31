import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextError } from './TextError';
import { IFormikSelectProps } from '../../types/types';
import {
  SelectContainer,
  StyledLabelTitle,
  StyledSelectOption,
} from './Forms.styled';
export const Select: React.FC<IFormikSelectProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <SelectContainer>
      <StyledLabelTitle htmlFor={name}>{label}</StyledLabelTitle>
      <Field
        className="form-select"
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        <StyledSelectOption key="empty" value="">
          Change...
        </StyledSelectOption>
        {options.map(option => (
          <StyledSelectOption key={option.id} value={option.id}>
            {option.listName}
          </StyledSelectOption>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg: string) => <TextError>{msg}</TextError>}
      />
    </SelectContainer>
  );
};
