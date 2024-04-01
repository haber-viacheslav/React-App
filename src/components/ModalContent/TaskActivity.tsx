import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook';
import { selectHistory } from '../../redux/history/selectors';
import { fetchHistory } from '../../redux/history/operations';
import {
  StyledHistoryWrp,
  StyledHistoryList,
  StyledHistoryItem,
  StyledHistoryDescription,
  StyledHistoryDate,
} from './ModalContents.styled';

export const TaskActivityModalContent: React.FC = () => {
  const histories = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  return (
    <StyledHistoryWrp>
      <StyledHistoryList>
        {histories.map(history => (
          <StyledHistoryItem key={history.id}>
            <StyledHistoryDescription>
              <span>Field Name: {history.fieldName}</span>
              <span>Old Value: {history.oldValue}</span>
              <span>New Value: {history.newValue}</span>
            </StyledHistoryDescription>

            <StyledHistoryDate>{history.updatedAt}</StyledHistoryDate>
          </StyledHistoryItem>
        ))}
      </StyledHistoryList>
    </StyledHistoryWrp>
  );
};
