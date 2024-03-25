import React from 'react';
import { Container } from '../Container/Container';
import { StyledHeader, StyledHeaderLogo } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderLogo href="/">My Task Board</StyledHeaderLogo>
      </Container>
    </StyledHeader>
  );
};
