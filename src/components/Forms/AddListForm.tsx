import React, { useEffect } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { IoMdAdd } from 'react-icons/io';
import { IList } from '../../types/types';
import { AddListSchema } from '../../helpers/validation';
import { FormikControl } from './FormControl';
import { FormWrap, FormButton } from './Forms.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';
import { addList, fetchLists } from '../../redux/lists/operations';
import { selectLists } from '../../redux/lists/selectors';
import { isListExists } from '../../helpers/isListExists';
import { IAddListForm } from '../../types/types';
import { showToast } from '../../toast/toast';
const initialValues = {
  listName: '',
};
export const AddListForm: React.FC<IAddListForm> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectLists);

  const handleSubmit = async (
    values: IList,
    { resetForm }: FormikHelpers<IList>
  ) => {
    if (isListExists(lists, values)) {
      showToast('error', `Error! 😲 ${values.listName} is already in list`);

      return;
    }
    dispatch(addList(values));
    onClick();
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddListSchema}
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
