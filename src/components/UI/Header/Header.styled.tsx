import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderLogo = styled.a`
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  color: ${props => props.theme.colors.black};
  @media screen and (${props => props.theme.media.md}) {
    font-size: 30px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
