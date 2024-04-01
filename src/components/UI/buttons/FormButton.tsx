import React from 'react';
import { StyledFormButton } from './FormButton.styled';

interface FormButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <StyledFormButton type="submit" onClick={onClick}>
      {children}
    </StyledFormButton>
  );
};
