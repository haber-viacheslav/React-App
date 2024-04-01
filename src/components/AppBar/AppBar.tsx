import React from 'react';
import { ButtonStyle } from '../../types/types';
import { FiPlus } from 'react-icons/fi';

import { PiArrowCounterClockwise } from 'react-icons/pi';
import { Button } from '../UI/buttons/Button';
import { ModalVariant } from '../../types/types';
import { useAppDispatch } from '../../redux/hook/hook';
import { setVariantAndOpen } from '../../redux/modal/modalSlice';
import { StyledAppBar } from './AppBar.styled';

export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSetVariant = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen({ variant }));
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
    </StyledAppBar>
  );
};
