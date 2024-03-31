import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ActionOverlay, ActionModalBody } from './Modal.styled';

interface ModalProps {
  onClick: () => void;
  children: React.ReactNode;
  position: { x: number; y: number };
}

const modalRoot = document.querySelector('#action-modal-root');

export const ActionMenu: React.FC<ModalProps> = ({
  onClick,
  children,
  position,
}) => {
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
    <ActionOverlay onClick={handleBackdropClick}>
      {position.y && position.x ? (
        <ActionModalBody
          style={{ top: position.y + 20, left: position.x + 20 }}
        >
          {children}
        </ActionModalBody>
      ) : (
        <ActionModalBody>{children}</ActionModalBody>
      )}
    </ActionOverlay>,
    modalRoot
  );
};
