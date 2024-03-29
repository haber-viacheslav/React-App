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
  max-height: 44px;
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
  width: 180px;
  justify-content: flex-start;
  color: ${props => props.theme.colors.mainGrey};
  background-color: ${props => props.theme.colors.clearWhite};
  &:hover,
  &:focus {
    box-shadow: none;
    background-color: ${props => props.theme.colors.light};
  }
`;

export const StyledDashedButton = styled.button`
  width: 340px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 0px;
  border: 1px dashed ${props => props.theme.colors.lightGrey};
  background-color: ${props => props.theme.colors.clearWhite};
  @media screen and (${props => props.theme.media.lg}) {
    width: 295px;
  }
`;

export const StyledButtonText = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 14px;
`;
export const StyledCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.transparent};
  cursor: pointer;
  transition: 400ms background-color ease-in-out, 400ms box-shadow ease-in-out;
`;
export const StyledMobileMenuButton = styled(StyledCloseButton)`
  position: static;
`;
