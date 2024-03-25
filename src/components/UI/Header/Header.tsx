import React from 'react';
import { Container, ContainerFlex } from '../Container/Container';
import { StyledHeader, StyledHeaderLogo } from './Header.styled';
import { HeaderProps } from '../../../types/types';
export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <Container>
        <ContainerFlex>
          <StyledHeaderLogo href="/">My Task Board</StyledHeaderLogo>
          {children}
        </ContainerFlex>
      </Container>
    </StyledHeader>
  );
};
