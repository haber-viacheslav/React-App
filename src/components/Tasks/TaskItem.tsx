import React, { useState, useRef, useEffect } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import {
  StyledTaskItem,
  StyledTaskHeader,
  StyledTaskTitle,
  StyledTaskDescription,
  TaskFooter,
  StyledTaskDueDate,
  StyledTaskPriority,
} from './Tasks.styled';
import { ActionMenu } from '../Modals/ActionMenu';
import { Button } from '../UI/buttons/Button';
import { Select } from '../Forms/Select/Select';
import { formatDate } from '../../helpers/formatDate';
import { Task, ButtonStyle } from '../../types/types';
import { useAppDispatch } from '../../redux/hook/hook';
import { deleteTask } from '../../redux/tasks/operations';
export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const { id, name, description, dueDate, priority } = task;

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);
  const dispatch = useAppDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
    handleToggleIsOpen();
  };
  useEffect(() => {
    const handleResize = () => {
      if (!buttonRef.current) {
        return;
      }
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setModalPosition({ x: buttonRect.left, y: buttonRect.top });
    };

    window.addEventListener('click', handleResize);

    return () => {
      window.removeEventListener('click', handleResize);
    };
  }, []);
  return (
    <>
      {task && (
        <StyledTaskItem>
          <StyledTaskHeader>
            <StyledTaskTitle>{name}</StyledTaskTitle>
            <div ref={buttonRef}>
              <Button
                icon={IoEllipsisVertical}
                variant={ButtonStyle.Mobile}
                onClick={handleToggleIsOpen}
              />
            </div>
          </StyledTaskHeader>

          <TaskFooter>
            <StyledTaskDescription>{description}</StyledTaskDescription>
            <StyledTaskDueDate>
              <FiCalendar />
              {formatDate(dueDate)}
            </StyledTaskDueDate>
            <StyledTaskPriority>{priority}</StyledTaskPriority>
            <Select task={task} />
          </TaskFooter>
        </StyledTaskItem>
      )}
      {isOpen && (
        <ActionMenu position={modalPosition} onClick={handleToggleIsOpen}>
          <Button
            icon={FiEdit}
            variant={ButtonStyle.WithoutBorder}
            text="Edit"
          />
          <Button
            onClick={handleDeleteTask}
            icon={RiDeleteBin5Line}
            variant={ButtonStyle.WithoutBorder}
            text="Delete"
          />
        </ActionMenu>
      )}
    </>
  );
};
