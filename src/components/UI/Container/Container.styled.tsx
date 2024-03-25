import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  width: 100vw;

  @media screen and (${props => props.theme.media.mToMd}) {
    max-width: 480px;
  }
  @media screen and (${props => props.theme.media.mdToLg}) {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
