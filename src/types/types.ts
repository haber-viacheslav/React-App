import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export type ToastVariant = 'success' | 'error' | 'loading';

export enum ModalVariant {
  TaskDetails = 'details',
  TaskActivity = 'activity',
  AddList = 'addList',
  AddTask = 'addTask',
  UpdateTask = 'updateTask',
  UpdateList = 'updateList',
  MobileMenu = 'mobile',
}

export enum ButtonStyle {
  Dark = 'dark',
  Light = 'light',
  WithoutBorder = 'withoutBorder',
  Dashed = 'dashed',
  Mobile = 'mobile',
}

export interface IModalProps {
  onClick: () => void;
  variant?: ModalVariant;
  children: ReactNode;
}

export interface IHeaderProps {
  children?: ReactNode;
}

export interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  text?: string;
  variant?: ButtonStyle;
}

export interface ITask {
  name: string;
  status: string;
  priority?: 'low' | 'medium' | 'high' | null;
  description?: string;
  dueDate: Date;
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

export interface IAddListForm {
  onClick: () => void;
}

//Redux

export interface IUpdateTaskArgs {
  id: number;
  data: Partial<Task>;
}

export interface ISelectProps {
  task: Task;
}

export interface ITaskItemProps {
  task: Task;
}
