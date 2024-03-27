import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal, ModalHeader, ModalBody } from './Modal.styled';
import { IModalProps, ModalVariant } from '../../types/types';
import { DeleteTaskListModalContent } from '../ModalContent/DeleteTaskList';
import { DeleteTaskModalContent } from '../ModalContent/DeleteTask';
import { TaskActivityModalContent } from '../ModalContent/TaskActivity';
import { TaskDetailsModalContent } from '../ModalContent/TaskDetails';
import { AddListForm } from '../Forms/AddListForm';
import { AddTaskForm } from '../Forms/AddTaskForm';
const modalRoot = document.querySelector('#modal-root');

export const Modal: React.FC<IModalProps> = ({
  onClick,
  variant,
  children,
}) => {
  let modalContent: React.ReactNode;

  switch (variant) {
    case ModalVariant.TaskDetails:
      modalContent = <TaskDetailsModalContent />;
      break;
    case ModalVariant.TaskActivity:
      modalContent = <TaskActivityModalContent />;
      break;
    case ModalVariant.DeleteTask:
      modalContent = <DeleteTaskModalContent />;
      break;
    case ModalVariant.DeleteTaskList:
      modalContent = <DeleteTaskListModalContent />;
      break;
    case ModalVariant.AddList:
      modalContent = <AddListForm />;
      break;
    case ModalVariant.AddTask:
      modalContent = <AddTaskForm />;
      break;
    default:
      modalContent = null;
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
        <ModalHeader>{children}</ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};
