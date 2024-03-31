import { RefObject, ReactNode } from 'react';
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
  ref?: RefObject<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  text?: string;
  variant?: ButtonStyle;
}

export interface IStyledModalProps {
  variant?: ModalVariant;
}

export interface ITask {
  name: string;
  status: string;
  priority: 'low' | 'medium' | 'high' | null;
  description?: string;
  dueDate?: Date;
}
export interface IUpdateTask {
  name?: string;
  status?: string;
  priority?: 'low' | 'medium' | 'high';
  description?: string;
  dueDate?: Date;
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
export interface IUpdateListForm {
  onClick: () => void;
}
export interface IUpdateListArgs {
  id: number;
  data: Partial<List>;
}
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

// Formik interfaces

export interface IOption {
  key: string;
  value: string;
  bg: string;
  border: string;
}

export interface IRadioButtonsProps {
  label: string;
  name: string;
  options: IOption[];
}

export interface IFormikSelectProps {
  label: string;
  name: string;
  options: List[];
}

export interface ITextErrorProps {
  children: ReactNode;
}

export interface ITextAreaProps {
  label: string;
  name: string;
  [key: string]: any;
}

export interface IInputProps {
  label: string;
  name: string;
  type: string;
}

export interface IDatePickerProps {
  label: string;
  name: string;
}

export interface IStyledRadioProps {
  bg?: string;
  border?: string;
}

export interface IStyledPriorityProps {
  priority?: string;
}
