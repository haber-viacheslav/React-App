import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { IList } from '@/types/types';
import { AddListSchema } from '../../helpers/validation';
import {
  FormWrap,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormInputWrp,
  FormButton,
} from './Forms.styled';

const initialValues = {
  listName: '',
};
export const AddListForm: React.FC = () => {
  const handleSubmit = (values: IList, { resetForm }: FormikHelpers<IList>) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddListSchema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <FormInputWrp htmlFor="listName">
          <FormLabel>Name</FormLabel>
          <FormInput type="text" name="listName" />
          <FormErrorMessage name="listName" component="span" />
        </FormInputWrp>

        <FormButton type="submit">Add list</FormButton>
      </FormWrap>
    </Formik>
  );
};
