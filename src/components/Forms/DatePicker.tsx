import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { TextError } from './TextError';
import { IDatePickerProps } from '../../types/types';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker: React.FC<IDatePickerProps> = ({
  label,
  name,
  ...rest
}) => {
  console.log(TextError);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: Date) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage
        render={(msg: string) => <TextError>{msg}</TextError>}
        name={name}
      />
    </div>
  );
};
