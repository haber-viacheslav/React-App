import React from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Select } from './Select';
import { RadioButtons } from './RadioButtons';
import { DatePicker } from './DatePicker';
import {
  IFormikSelectProps,
  IInputProps,
  ITextAreaProps,
  IRadioButtonsProps,
  IDatePickerProps,
} from '../../types/types';

interface FormikControlProps {
  control: 'input' | 'textarea' | 'select' | 'radio' | 'date';
  label?: string;
  name?: string;
  options?: any[];
}

export const FormikControl: React.FC<FormikControlProps> = ({
  control,
  ...rest
}) => {
  switch (control) {
    case 'input':
      return <Input {...(rest as IInputProps)} />;
    case 'textarea':
      return <TextArea {...(rest as ITextAreaProps)} />;
    case 'select':
      return <Select {...(rest as IFormikSelectProps)} />;
    case 'radio':
      return <RadioButtons {...(rest as IRadioButtonsProps)} />;
    case 'date':
      return <DatePicker {...(rest as IDatePickerProps)} />;
    default:
      return null;
  }
};
