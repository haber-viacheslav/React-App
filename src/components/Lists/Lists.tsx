import React, { useRef, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import { StyledLists, StyledListItem } from './Lists.styled';
import { StyledTasks } from '../Tasks/Tasks.styled';
import { ListItem } from './ListItem';
import { TaskItem } from '../Tasks/TaskItem';
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook';
import {
  selectLists,
  //   selectListsError,
  //   selectListsIsLoading,
} from '../../redux/lists/selectors';
import {
  selectTasks,
  //   selectTasksError,
  //   selectTasksIsLoading,
} from '../../redux/tasks/selectors';
import { fetchLists } from '../../redux/lists/operations';
import { fetchTasks } from '../../redux/tasks/operations';
import { setVariantAndOpen } from '../../redux/modal/modalSlice';
import { Button } from '../UI/buttons/Button';
import { ModalVariant } from '../../types/types';
import { ButtonStyle } from '../../types/types';

export const Lists: React.FC = () => {
  const listsRef = useRef<HTMLUListElement>(null);

  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectLists);
  //   const isListsLoading = useAppSelector(selectListsIsLoading);
  //   const isListsError = useAppSelector(selectListsError);
  const tasks = useAppSelector(selectTasks);
  //   const isTasksLoading = useAppSelector(selectTasksIsLoading);
  //   const isTasksError = useAppSelector(selectTasksError);

  const handleSetVariant = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen({ variant }));
  };
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (listsRef.current) {
      listsRef.current.scrollTo({
        left: listsRef.current.scrollLeft + e.deltaY * 4,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const listsContainer = listsRef.current;
    if (listsContainer) {
      listsContainer.addEventListener('wheel', handleWheel);
      return () => listsContainer.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  useEffect(() => {
    const listsContainer = listsRef.current;
    if (listsContainer) {
      listsContainer.addEventListener('wheel', handleWheel);
      return () => listsContainer.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  useEffect(() => {
    dispatch(fetchLists());
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <>
      {lists && (
        <>
          <StyledLists ref={listsRef}>
            {lists.map(list => {
              const tasksForList = tasks.filter(
                task => task.statusId === list.id
              );
              return (
                <StyledListItem key={list.id}>
                  <ListItem list={list} tasksCount={tasksForList.length} />
                  <StyledTasks>
                    <li>
                      <Button
                        icon={FiPlus}
                        onClick={() => handleSetVariant(ModalVariant.AddTask)}
                        text="Add new card"
                        variant={ButtonStyle.Dashed}
                      />
                    </li>
                    {tasksForList.map(task => (
                      <li key={task.id}>
                        <TaskItem task={task} />
                      </li>
                    ))}
                  </StyledTasks>
                </StyledListItem>
              );
            })}
          </StyledLists>
        </>
      )}
    </>
  );
};
