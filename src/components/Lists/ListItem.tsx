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
import { setVariantAndOpen } from '../../redux/modal/modalSlice';
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
    dispatch(deleteList(id));
    handleToggleIsOpen();
  };
  const handleSetVariant = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen(variant));
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
            onClick={() => handleSetVariant(ModalVariant.AddList)}
            variant={ButtonStyle.WithoutBorder}
            text="Edit"
          />
          <Button
            icon={FiPlus}
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
