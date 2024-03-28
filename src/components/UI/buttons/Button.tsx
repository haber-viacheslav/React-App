import React from 'react';
import { IButtonProps, ButtonStyle } from '../../../types/types';
import {
  StyledCloseButton,
  StyledLightButton,
  TransparentWithoutBorderButton,
  StyledDottedButton,
  StyledDarkButton,
  StyledMobileMenuButton,
} from './Button.styled';

export const Button: React.FC<IButtonProps> = ({
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
    case ButtonStyle.Mobile:
      ButtonStyled = StyledMobileMenuButton;
      break;
    default:
      ButtonStyled = StyledCloseButton;
      break;
  }

  return (
    <ButtonStyled type="button" onClick={onClick}>
      {Icon && (
        <Icon
          color={
            ButtonStyled === StyledDarkButton ||
            ButtonStyled === StyledCloseButton
              ? '#ffffff'
              : '#504b5f'
          }
          size={24}
        />
      )}

      {text && <span>{text}</span>}
    </ButtonStyled>
  );
};
