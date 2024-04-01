import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, FormikHelpers } from 'formik';
import { ITask } from '@/types/types';
import { AddTaskSchema } from '../../helpers/validation';
import radioOptions from '../../data/radio.json';
import { StyledFormWrap } from './Forms.styled';
import { FormikControl } from './FormControl';
import { selectLists } from '../../redux/lists/selectors';
import { addTask } from '../../redux/tasks/operations';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';
import { FormButton } from '../UI/buttons/FormButton';

const initialValues: ITask = {
  name: '',
  status: '',
  priority: 'low',
  description: '',
  dueDate: new Date(),
};

export const AddTaskForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectLists);
  const handleSubmit = (values: ITask, { resetForm }: FormikHelpers<ITask>) => {
    console.log(values);
    dispatch(addTask(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddTaskSchema}
      onSubmit={handleSubmit}
    >
      <StyledFormWrap>
        <FormikControl control="input" label="Name" name="name" />
        <FormikControl
          control="textarea"
          label="Description"
          name="description"
        />
        <FormikControl
          control="select"
          label="Status"
          name="status"
          options={lists}
        />
        <FormikControl
          control="radio"
          label="Priority"
          name="priority"
          options={radioOptions}
        />
        <FormikControl control="date" label="Due Date" name="dueDate" />
        <FormButton>Add</FormButton>
      </StyledFormWrap>
    </Formik>
  );
};
