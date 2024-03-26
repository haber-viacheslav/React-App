import React from 'react';
import { ButtonProps, ButtonStyle } from '../../../types/types';
import {
  StyledCloseButton,
  StyledLightButton,
  TransparentWithoutBorderButton,
  StyledDottedButton,
  StyledDarkButton,
} from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  icon: Icon,
  text,
  variant,
}) => {
  let ButtonStyled;

  switch (variant) {
    case ButtonStyle.Dark:
      ButtonStyled = StyledDarkButton;
      break;
    case ButtonStyle.Light:
      ButtonStyled = StyledLightButton;
      break;
    case ButtonStyle.WithoutBorder:
      ButtonStyled = TransparentWithoutBorderButton;
      break;
    case ButtonStyle.Dotted:
      ButtonStyled = StyledDottedButton;
      break;
    default:
      ButtonStyled = StyledCloseButton;
      break;
  }

  return (
    <ButtonStyled type="button" onClick={onClick}>
      {Icon && (
        <Icon
          color={ButtonStyled === StyledDarkButton ? '#ffffff' : '#504b5f'}
          size={18}
        />
      )}

      {text && <span>{text}</span>}
    </ButtonStyled>
  );
};
