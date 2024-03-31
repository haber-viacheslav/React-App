import React from 'react';
import { ErrorMessage, FieldProps } from 'formik';
import { FiCalendar } from 'react-icons/fi';
import { TextError } from './TextError';
import { IDatePickerProps } from '../../types/types';
import {
  SelectContainer,
  StyledDate,
  StyledDateContainer,
  StyledLabelTitle,
} from './Forms.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker: React.FC<IDatePickerProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <SelectContainer>
      <StyledLabelTitle htmlFor={name}>{label}</StyledLabelTitle>
      <StyledDateContainer name={name}>
        {({ form, field }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <StyledDate
              showIcon
              icon={<FiCalendar />}
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: Date) => setFieldValue(name, val)}
            />
          );
        }}
      </StyledDateContainer>
      <ErrorMessage
        render={(msg: string) => <TextError>{msg}</TextError>}
        name={name}
      />
    </SelectContainer>
  );
};
