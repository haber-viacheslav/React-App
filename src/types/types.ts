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

export interface IModalProps {
  onClick: () => void;
  variant: ModalVariant;
  children: ReactNode;
}

export interface IHeaderProps {
  children?: ReactNode;
}

export enum ButtonStyle {
  Dark = 'dark',
  Light = 'light',
  WithoutBorder = 'withoutBorder',
  Dotted = 'dotted',
}

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  text?: string;
  variant?: ButtonStyle;
}

export interface ITask {
  name?: string;
  status?: string;
  priority?: 'low' | 'medium' | 'high' | null;
  description?: string;
  dueDate?: Date;
  statusId: number;
}

export interface IList {
  listName: string;
}

export interface Task {
  id: number;
  name: string;
  status: string;
  statusId: number;
  priority: string;
  dueDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface List {
  id: number;
  listName: string;
  createdAt: string;
  updatedAt: string;
}
