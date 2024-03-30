import { string, object, date, ObjectSchema } from 'yup';
import { ITask } from '@/types/types';
export const AddListSchema = object().shape({
  listName: string().trim().strict().required(),
});
export const EditListSchema = object().shape({
  listName: string().trim().strict(),
});

export const AddTaskSchema: ObjectSchema<ITask> = object({
  name: string().trim().strict().required(),
  status: string().trim().strict().required(),
  priority: string<'low' | 'medium' | 'high'>().required(),
  description: string().trim().strict().required(),
  dueDate: date()
    .default(() => new Date())
    .required(),
});

export const EditTaskSchema: ObjectSchema<ITask> = object({
  name: string().trim().strict(),
  status: string().trim().strict(),
  priority: string<'low' | 'medium' | 'high'>(),
  description: string().trim().strict(),
  dueDate: date().default(() => new Date()),
});
