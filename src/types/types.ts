import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export enum ModalVariant {
  TaskDetails,
  TaskActivity,
  DeleteTask,
  DeleteTaskList,
  AddList,
  AddTask,
  UpdateTask,
  UpdateList,
}

export interface ModalProps {
  onClick: () => void;
  variant: ModalVariant;
  children: ReactNode;
}

export interface HeaderProps {
  children?: ReactNode;
}

export enum ButtonStyle {
  Dark = 'dark',
  TransparentWithBorder = 'transparentWithBorder',
  TransparentWithoutBorder = 'transparentWithoutBorder',
  Dotted = 'dotted',
}

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  text?: string;
  variant?: ButtonStyle;
}
