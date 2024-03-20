import React from 'react';
import { Container } from '../Container/Container';
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderLogoThin,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderLogo href="/react-app">
          <StyledHeaderLogoThin>My Task Board</StyledHeaderLogoThin> Forecast
        </StyledHeaderLogo>
      </Container>
    </StyledHeader>
  );
};
