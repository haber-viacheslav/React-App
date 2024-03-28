import React, { useState } from 'react';
import { ButtonStyle } from '../../types/types';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { Button } from '../UI/buttons/Button';
import { ModalVariant } from '../../types/types';
import { useAppDispatch } from '../../redux/hook/hook';
import { setVariantValue } from '../../redux/variant/variantSlice';
import { StyledAppBar } from './AppBar.styled';
import { Modal } from '../Modal/Modal';
export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSetVariant = (variant: ModalVariant): void => {
    dispatch(setVariantValue(variant));
    setIsOpen(true);
  };

  const handleToggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledAppBar>
      <Button
        icon={PiArrowCounterClockwise}
        onClick={() => handleSetVariant(ModalVariant.TaskActivity)}
        text="History"
        variant={ButtonStyle.Light}
      />
      <Button
        icon={FiPlus}
        onClick={() => handleSetVariant(ModalVariant.AddList)}
        text="Create new list"
        variant={ButtonStyle.Dark}
      />
      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <Button icon={AiOutlineClose} onClick={handleToggleIsOpen} />
        </Modal>
      )}
    </StyledAppBar>
  );
};
