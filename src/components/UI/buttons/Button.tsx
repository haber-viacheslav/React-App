import React from 'react';
import { ButtonProps, ButtonStyle } from '../../../types/types';
import {
  StyledCloseButton,
  TransparentWithBorderButton,
  TransparentWithoutBorderButton,
  StyledDottedButton,
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
      ButtonStyled = StyledCloseButton;
      break;
    case ButtonStyle.TransparentWithBorder:
      ButtonStyled = TransparentWithBorderButton;
      break;
    case ButtonStyle.TransparentWithoutBorder:
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
      {Icon && <Icon color="#ffffff" size={20} />}
      {text && <span>{text}</span>}
    </ButtonStyled>
  );
};
