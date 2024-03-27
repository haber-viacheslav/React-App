import React from 'react';
import { Container } from '../Container/Container';
import { StyledHeader, StyledHeaderLogo, FlexContainer } from './Header.styled';
import { IHeaderProps } from '../../../types/types';
export const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer>
          <StyledHeaderLogo href="/">My Task Board</StyledHeaderLogo>
          {children}
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};
