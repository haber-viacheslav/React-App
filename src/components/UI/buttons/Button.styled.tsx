import styled from 'styled-components';

export const StyledDarkButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.mainGrey};
  color: ${props => props.theme.colors.clearWhite};
  padding: 10px 20px;
  transition: 400ms background-color ease-in-out, 400ms box-shadow ease-in-out,
    400ms color ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.midGrey};
    box-shadow: ${props => props.theme.shadows.mainShadow};
  }
`;

export const StyledLightButton = styled(StyledDarkButton)`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  background-color: ${props => props.theme.colors.clearWhite};
  color: ${props => props.theme.colors.darkGrey};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.light};
  }
`;
export const TransparentWithoutBorderButton = styled(StyledDarkButton)`
  border: none;
`;

export const StyledDottedButton = styled.button`
  border: 1px dotted ${props => props.theme.colors.darkGrey};
`;
export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.transparent};
  cursor: pointer;
  transition: 250ms background-color ease-in-out, 250ms box-shadow ease-in-out;
  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.thirdShadow};
  }
`;
