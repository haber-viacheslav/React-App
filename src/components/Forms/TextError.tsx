import React from 'react';
import { ITextErrorProps } from '../../types/types';
import { StyledError } from './Forms.styled';
export const TextError: React.FC<ITextErrorProps> = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};
