import styled from 'styled-components';
export const StyledFormButton = styled.button`
  display: inline-block;
  align-self: center;
  width: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.mainGrey};
  color: ${props => props.theme.colors.clearWhite};
  padding: 10px 20px;
  max-height: 44px;
  transition: 400ms background-color ease-in-out, 400ms box-shadow ease-in-out,
    400ms color ease-in-out, 400ms scale ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
    background-color: ${props => props.theme.colors.midGrey};
    box-shadow: ${props => props.theme.shadows.mainShadow};
  }
  cursor: pointer;
  &:hover,
  &:focus {
    scale: 1.05;
    background-color: ${props => props.theme.colors.midGrey};
    box-shadow: ${props => props.theme.shadows.mainShadow};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.darkGrey};
    border-color: ${props => props.theme.colors.light};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
