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

export const ActionOverlay = styled(Overlay)`
  z-index: 500;
`;
export const ActionModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.clearWhite};
  position: absolute;
  border-radius: 8px;
`;
interface IStyledModalProps {
  variant?: ModalVariant;
}

export const StyledModal = styled.div<IStyledModalProps>`
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
          border-radius: 8px;
        `;
      case ModalVariant.TaskActivity:
        return `
          top: 0;
          right: 0;
          height: 100vh;
           @media screen and (max-width: 480px) {
          width: 100%;
  }
          width: 400px;
        `;
      case ModalVariant.MobileMenu:
        return `
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
        `;
      case ModalVariant.AddList:
        return `
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          border-radius: 8px;
        `;
      default:
        return `
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          border-radius: 8px;
        
        `;
    }
  }}
`;
export const ModalHeader = styled.div<IStyledModalProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.mainGrey};
  ${({ variant }) =>
    variant === ModalVariant.TaskActivity
      ? `padding: 10px 20px;`
      : `padding: 20px 0;`};
`;

export const ModalBody = styled.div`
  background-color: ${props => props.theme.colors.clearWhite};
  padding: 0 20px;
`;

export const StyledModalTitle = styled.p`
  color: ${props => props.theme.colors.clearWhite};
  font-weight: ${props => props.theme.colors.medium};
`;
