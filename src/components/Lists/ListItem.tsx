import React, { useState, useRef, useEffect } from 'react';
import {
  StyledListTitle,
  StyledItem,
  StyledCounter,
  StyledContainer,
} from './Lists.styled';
import { ButtonStyle, List, ModalVariant } from '../../types/types';
import { Button } from '../UI/buttons/Button';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { ActionMenu } from '../Modals/ActionMenu';
import { useAppDispatch } from '../../redux/hook/hook';
import { deleteList } from '../../redux/lists/operations';
import {
  setVariantAndOpen,
  setCurrentList,
} from '../../redux/modal/modalSlice';
import { showToast } from '../../toast/toast';

export const ListItem: React.FC<{ list: List; tasksCount: number }> = ({
  list,
  tasksCount,
}) => {
  const { listName, id } = list;
  const buttonRef = useRef<HTMLDivElement>(null);

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);

  const dispatch = useAppDispatch();
  const handleDeleteList = () => {
    if (tasksCount) {
      showToast('error', 'Move your tasks to another list.');
      return;
    }
    dispatch(deleteList(id));
    handleToggleIsOpen();
  };
  const handleEditList = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen({ variant }));
    dispatch(setCurrentList({ list }));
  };

  const handleAddTask = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen({ variant }));
  };
  useEffect(() => {
    const handleResize = () => {
      if (!buttonRef.current) {
        return;
      }
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setModalPosition({ x: buttonRect.left - 190, y: buttonRect.top });
    };

    window.addEventListener('click', handleResize);

    return () => {
      window.removeEventListener('click', handleResize);
    };
  }, []);
  return (
    <>
      <StyledItem>
        <StyledListTitle>{listName}</StyledListTitle>
        <StyledContainer>
          <StyledCounter>{tasksCount}</StyledCounter>
          <div ref={buttonRef}>
            <Button
              icon={IoEllipsisVertical}
              variant={ButtonStyle.Mobile}
              onClick={handleToggleIsOpen}
            />
          </div>
        </StyledContainer>
      </StyledItem>
      {isOpen && (
        <ActionMenu position={modalPosition} onClick={handleToggleIsOpen}>
          <Button
            icon={FiEdit}
            onClick={() => handleEditList(ModalVariant.UpdateList)}
            variant={ButtonStyle.WithoutBorder}
            text="Edit"
          />
          <Button
            icon={FiPlus}
            onClick={() => handleAddTask(ModalVariant.AddTask)}
            variant={ButtonStyle.WithoutBorder}
            text="Add new card"
          />
          <Button
            onClick={handleDeleteList}
            icon={RiDeleteBin5Line}
            variant={ButtonStyle.WithoutBorder}
            text="Delete"
          />
        </ActionMenu>
      )}
    </>
  );
};
