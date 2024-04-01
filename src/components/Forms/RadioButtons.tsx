import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { TextError } from './TextError';
import { IRadioButtonsProps } from '../../types/types';
import {
  RadioContainer,
  RadioInput,
  RadioLabel,
  StyledTitle,
  RadioOptionTitle,
} from './Forms.styled';
export const RadioButtons: React.FC<IRadioButtonsProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div>
      <StyledTitle>{label}</StyledTitle>
      <RadioContainer>
        <Field name={name}>
          {({ field }: FieldProps) => {
            return options.map(option => {
              return (
                <RadioLabel key={option.key}>
                  <RadioOptionTitle htmlFor={option.value}>
                    {option.key}
                  </RadioOptionTitle>
                  <RadioInput
                    bg={option.bg}
                    border={option.border}
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                </RadioLabel>
              );
            });
          }}
        </Field>
        <ErrorMessage
          name={name}
          render={(msg: string) => <TextError>{msg}</TextError>}
        />
      </RadioContainer>
    </div>
  );
};
