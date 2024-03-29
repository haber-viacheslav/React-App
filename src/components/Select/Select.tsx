import React from 'react';
import { StyledSelect, StyledOption } from './Select.styled';
import { ISelectProps } from '../../types/types';
import { selectLists } from '../../redux/lists/selectors';
import { updateTask } from '../../redux/tasks/operations';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hook';

export const Select: React.FC<ISelectProps> = ({ task }) => {
  const { id } = task;
  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectLists);
  const handleMoveTo = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedOptionIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedOptionIndex];
    const selectedListName = selectedOption.textContent;
    const data = {
      statusId: parseInt(e.target.value),
      status: selectedListName || '',
    };
    if (!data.statusId) {
      return;
    }
    dispatch(updateTask({ id, data }));
  };
  return (
    <StyledSelect onChange={handleMoveTo}>
      <StyledOption value="">Move to...</StyledOption>
      {lists.map(list => (
        <StyledOption key={list.id} value={list.id}>
          {list.listName}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
