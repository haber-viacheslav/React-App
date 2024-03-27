import styled from 'styled-components';
import { ModalVariant } from '../../types/types';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: ${props => props.theme.colors.backdrop};
`;
interface StyledModalProps {
  variant?: ModalVariant;
}

export const StyledModal = styled.div<StyledModalProps>`
  background-color: ${props => props.theme.colors.clearWhite};
  position: absolute;
  ${({ variant }) => {
    switch (variant) {
      case ModalVariant.TaskDetails:
        return `
          top: 20%;
          left: 50%;
          transform: translate(-50%, -20%);
          width: 80%;
          height: 80%;
        `;
      case ModalVariant.TaskActivity:
        return `
          top: 0;
          right: 10%;
          width: 80%;
          height: 70%;
        `;
      default:
        return `
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 680px;
          height: 500px;
        `;
    }
  }}
`;
export const ModalHeader = styled.div`
  padding: 20px 0;
  background-color: ${props => props.theme.colors.darkGrey};
`;

export const ModalBody = styled.div`
  background-color: ${props => props.theme.colors.clearWhite};
  padding: 0 20px;
`;
