import styled from 'styled-components';
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

export const TransparentWithBorderButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 16px;
  border: 2px solid ${props => props.theme.colors.light};
  border-radius: 2px;
  background-color: ${props => props.theme.colors.clearWhite};
  color: ${props => props.theme.colors.darkGrey};
  padding: 4px 8px;
  transition: 250ms background-color ease-in-out, 250ms box-shadow ease-in-out,
    250ms color ease-in-out, 250ms border-color ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.clearWhite};
    background-color: ${props => props.theme.colors.blue};
    box-shadow: ${props => props.theme.shadows.thirdShadow};
    border-color: ${props => props.theme.colors.blue};
  }
`;
export const TransparentWithoutBorderButton = styled(
  TransparentWithBorderButton
)`
  border: none;
`;

export const StyledDottedButton = styled.button`
  border: 1px dotted ${props => props.theme.colors.darkGrey};
`;
