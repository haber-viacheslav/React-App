import React, { FC, ReactNode } from 'react';
import { StyledContainer, StyledFlexContainer } from './Container.styled';

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const ContainerFlex: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};
