import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, FormikHelpers, Field } from 'formik';
import { ITask } from '@/types/types';
import { AddTaskSchema } from '../../helpers/validation';
import {
  FormWrap,
  FormErrorMessage,
  FormLabel,
  FormInputWrp,
  FormButton,
  FormInput,
} from './Forms.styled';

const initialValues: ITask = {
  name: '',
  status: '',
  priority: 'low',
  description: '',
  dueDate: new Date(),
  statusId: 0,
};

const priorityOptions = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
];

const yourStatusOptions = [
  { value: 'todo', label: 'To Do' },
  { value: 'inprogress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

export const AddTaskForm: React.FC = () => {
  const handleSubmit = (values: ITask, { resetForm }: FormikHelpers<ITask>) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddTaskSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <FormWrap autoComplete="off">
          <FormInputWrp htmlFor="name">
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" />
            <FormErrorMessage name="name" component="span" />
          </FormInputWrp>

          <FormInputWrp htmlFor="status">
            <FormLabel>Status</FormLabel>
            <Field name="status" as="select">
              {yourStatusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <FormErrorMessage name="status" component="span" />
          </FormInputWrp>

          <FormInputWrp htmlFor="priority">
            <FormLabel>Priority</FormLabel>
            <div>
              {priorityOptions.map(option => (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    name="priority"
                    value={option.value}
                    checked={values.priority === option.value}
                    onChange={() => setFieldValue('priority', option.value)}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
            <FormErrorMessage name="priority" component="span" />
          </FormInputWrp>

          <FormInputWrp htmlFor="dueDate">
            <FormLabel>Due Date</FormLabel>
            <DatePicker
              selected={values.dueDate}
              onChange={(date: Date) => setFieldValue('dueDate', date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <FormErrorMessage name="dueDate" component="span" />
          </FormInputWrp>

          <FormButton type="submit">Add Task</FormButton>
        </FormWrap>
      )}
    </Formik>
  );
};
