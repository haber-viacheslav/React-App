import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (${props => props.theme.media.sm}) {
    width: 380px;
  }
  @media screen and (${props => props.theme.media.md}) {
    width: 768px;
    padding: 0 30px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
