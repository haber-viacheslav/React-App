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
import { Select } from '../Select/Select';
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
      const buttonRect = buttonRef.current
        ? buttonRef.current.getBoundingClientRect()
        : null;
      if (buttonRect) {
        setModalPosition({ x: buttonRect.left, y: buttonRect.top });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <StyledTaskItem>
        <StyledTaskHeader ref={buttonRef}>
          <StyledTaskTitle>{name}</StyledTaskTitle>
          <Button
            icon={IoEllipsisVertical}
            variant={ButtonStyle.Mobile}
            onClick={handleToggleIsOpen}
          />
        </StyledTaskHeader>
        <StyledTaskDescription>{description}</StyledTaskDescription>
        <TaskFooter>
          <StyledTaskDueDate>
            <FiCalendar />
            {formatDate(dueDate)}
          </StyledTaskDueDate>
          <StyledTaskPriority>{priority}</StyledTaskPriority>
          <Select task={task} />
        </TaskFooter>
      </StyledTaskItem>
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
