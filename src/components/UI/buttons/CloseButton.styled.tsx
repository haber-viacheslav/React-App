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
  transition: 400ms background-color ease-in-out, 400ms box-shadow ease-in-out;
  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.thirdShadow};
  }
`;
