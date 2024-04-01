import React, { useEffect } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { IoMdAdd } from 'react-icons/io';
import { IList, IUpdateListForm } from '../../types/types';
import { EditListSchema } from '../../helpers/validation';
import { FormikControl } from './FormControl';
import { FormWrap, FormButton } from './Forms.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';
import { updateList, fetchLists } from '../../redux/lists/operations';
import { selectCurrentList } from '../../redux/modal/selectors';

export const EditListForm: React.FC<IUpdateListForm> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectCurrentList);
  console.log(list);
  const { id, listName } = list;
  const initialValues = {
    listName,
  };

  const handleSubmit = async (
    values: IList,
    { resetForm }: FormikHelpers<IList>
  ) => {
    dispatch(updateList({ id, data: values }));
    onClick();
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditListSchema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <FormikControl control="input" label="List name" name="listName" />
        <FormButton type="submit">
          <IoMdAdd />
        </FormButton>
      </FormWrap>
    </Formik>
  );
};
