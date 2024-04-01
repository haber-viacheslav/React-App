import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  StyledModal,
  ModalHeader,
  ModalBody,
  StyledModalTitle,
} from './Modal.styled';
import { IModalProps, ModalVariant } from '../../types/types';
import { TaskActivityModalContent } from '../ModalContent/TaskActivity';
import { TaskDetailsModalContent } from '../ModalContent/TaskDetails';
import { AddListForm } from '../Forms/AddListForm';
import { AddTaskForm } from '../Forms/AddTaskForm';
import { AppBar } from '../AppBar/AppBar';
import { EditListForm } from '../Forms/EditListForm';
import { useAppSelector } from '../../redux/hook/hook';
import { selectVariant } from '../../redux/modal/selectors';

const modalRoot = document.querySelector('#modal-root');

export const Modal: React.FC<IModalProps> = ({ onClick, children }) => {
  const variant = useAppSelector(selectVariant);
  let modalContent: React.ReactNode;

  switch (variant) {
    case ModalVariant.TaskDetails:
      modalContent = <TaskDetailsModalContent />;
      break;
    case ModalVariant.TaskActivity:
      modalContent = <TaskActivityModalContent />;
      break;
    case ModalVariant.AddList:
      modalContent = <AddListForm onClick={onClick} />;
      break;
    case ModalVariant.AddTask:
      modalContent = <AddTaskForm />;
      break;
    case ModalVariant.UpdateList:
      modalContent = <EditListForm onClick={onClick} />;
      break;
    case ModalVariant.MobileMenu:
      modalContent = <AppBar />;
      break;
    default:
      modalContent = <AddTaskForm />;
      break;
  }

  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (target === e.currentTarget) {
      onClick();
    }
  };

  if (!modalRoot) return null;

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal variant={variant}>
        <ModalHeader variant={variant}>
          {variant === ModalVariant.TaskActivity && (
            <StyledModalTitle>History</StyledModalTitle>
          )}
          {children}
        </ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};
